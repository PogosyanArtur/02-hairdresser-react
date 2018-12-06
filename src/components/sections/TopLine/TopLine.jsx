import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import MediaQuery from 'react-responsive';

import SocialsInfo from '../../ui/Contacts/SocialsInfo/SocialsInfo';
import ContactsInfo from '../../ui/Contacts/ContactsInfo/ContactsInfo';

import classes from './TopLine.module.scss';
import Icon from '../../icon/icon';

class Topline extends Component {
	state = {
		contactsHeight: 0
	};

	toggleHandler = () => {
		this.setState(prevState => ({
			contactsHeight: prevState.contactsHeight === 0 ? 'auto' : 0
		}));
	};

	render() {
		return (
			<section className={classes.Block}>
				<div className={classes.Container}>
					<MediaQuery maxWidth={991}>
						<AnimateHeight duration={500} height={this.state.contactsHeight}>
							<div id="TopLineContacts">
								<ContactsInfo
									contactsInfoClassName={classes.ContactsBlock}
									withIcon
									names={['time', 'mail', 'tel']}
								/>
								<SocialsInfo
									socialInfoClassName={classes.SocialsBlock}
									view="light"
								/>
							</div>
						</AnimateHeight>
						<div className={classes.Arrow} onClick={this.toggleHandler}>
							<Icon name="arrow" size="10" />
						</div>
					</MediaQuery>
					<MediaQuery minWidth={992}>
						<div id="TopLineContacts" className={classes.Contacts}>
							<ContactsInfo
								contactsInfoClassName={[
									classes.ContactsBlock,
									classes.ContactsBlock_screen_lg
								].join(' ')}
								withIcon
								names={['time', 'mail', 'tel']}
							/>
							<SocialsInfo
								socialInfoClassName={[
									classes.SocialsBlock,
									classes.SocialsBlock_screen_lg
								].join(' ')}
								view="light"
							/>
						</div>
					</MediaQuery>
				</div>
			</section>
		);
	}
}
export default Topline;
