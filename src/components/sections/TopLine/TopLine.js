import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import SocialsInfo from '../../ui/Contacts/SocialsInfo/SocialsInfo';
import ContactsInfo from '../../ui/Contacts/ContactsInfo/ContactsInfo';

import classes from './TopLine.module.scss';
import Icon from '../../icon/icon';

class Topline extends Component {
	state = {
		showContacts: true,
		contactsDefaultHeight:null,
		contactsHeight: 0
	};

	toggleHandler = () => {
		this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
	};

	initViewContacts() {
		if (window.innerWidth < 992) {

			this.setState((prevState) => ({
				showContacts: false,
				contactsHeight: prevState.contactsDefaultHeight
			}));
		}
		if (window.innerWidth >= 992) {
			this.setState({ showContacts: true, contactsHeight: 'auto' });
		}
	}
	componentDidMount() {
		this.initViewContacts();
		window.addEventListener('resize', this.initViewContacts.bind(this));
		const contactsDefaultHeight = document.getElementById('TopLineContacts').clientHeight;
		this.setState({contactsDefaultHeight})
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.initViewContacts.bind(this));
	}

	render() {
		const duration = 200;
		const contactsDefaultStyles = {
			height: this.state.contactsHeight,
			transition: `all ${duration}ms ease-in`,
			overflow: 'hidden'
		};
		const transitionStyles = {
			entered: { height: this.state.contactsDefaultHeight },
			exited: { height: 0 }
		};
		return (
			<section className={classes.Block}>
				<div className={classes.Container}>
					<Transition in={this.state.showContacts} mountOnEnter timeout={duration}>
						{(state) => (
							<div
								id="TopLineContacts"
								className={classes.Contacts}
								style={{
									...contactsDefaultStyles,
									...transitionStyles[state]
								}}
							>
								<ContactsInfo
									contactsInfoClassName={classes.ContactsBlock}
									names={[ 'time', 'mail', 'tel' ]}
								/>
								<SocialsInfo
									socialInfoClassName={classes.SocialsBlock}
									view="light"
								/>
							</div>
						)}
					</Transition>
					<div className={classes.Arrow} onClick={this.toggleHandler}>
						<Icon name="arrow" size="10" />
					</div>
				</div>
			</section>
		);
	}
}
export default Topline;
