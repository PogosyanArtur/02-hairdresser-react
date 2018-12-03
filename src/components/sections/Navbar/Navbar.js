import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import MediaQuery from 'react-responsive';

import styles from './Navbar.module.scss';
import logoImage from '../../../assets/images/logo-383x354.png';
import Icon from '../../icon/icon';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listsHeight: 0
		};
	}
	toggleHandler = () => {
		this.setState(prevState => ({ listsHeight: prevState.listsHeight === 0 ? 'auto' : 0 }));
	};

	render() {
		let navbarLists = [
			{ name: 'главная', link: '#' },
			{ name: 'услуги', link: '#service' },
			{ name: 'цены', link: '#price' },
			{ name: 'акции', link: '#' },
			{ name: 'контакты', link: '#' }
		];

		let lists = navbarLists.map((item, index) => (
			<a className={styles.Link} key={index} href={item.link}>
				{item.name}
			</a>
		));

		return (
			<React.Fragment>
				<MediaQuery maxWidth={991}>
					<section className={styles.Box}>
						<div className={styles.Container}>
							<a className={styles.Brand} href="#s">
								<img className={styles.BrandImage} src={logoImage} alt="logo" />
							</a>
							<button
								className={styles.Toggler}
								type="button"
								onClick={this.toggleHandler}
							>
								<Icon name="menu" color="#fff" />
							</button>
						</div>
						<AnimateHeight duration={500} height={this.state.listsHeight}>
							<div className={styles.Nav}>{lists}</div>
						</AnimateHeight>
					</section>
				</MediaQuery>
				<MediaQuery minWidth={992}>
					<section className={[styles.Box, styles.Box_screen_lg].join(' ')}>
						<div className={[styles.Container, styles.Container_screen_lg].join(' ')}>
							<a className={styles.Brand} href="#s">
								<img className={styles.BrandImage} src={logoImage} alt="logo" />
							</a>
						</div>
						<div className={[styles.Nav, styles.Nav_screen_lg].join(' ')}>{lists}</div>
					</section>
				</MediaQuery>
			</React.Fragment>
		);
	}
}

export default NavBar;
