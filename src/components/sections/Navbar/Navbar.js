import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import logoImage from '../../../assets/images/logo-383x354.png';
import Icon from '../../icon/icon';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listsIsVisible: true
		};
	}
	menuToggleHandler = () => {
		this.setState({ listsIsVisible: !this.state.listsIsVisible });
	};
	initMenuLists = () => {
		let windowWidth = window.innerWidth;
		if (windowWidth > 992) {
			this.setState({ listsIsVisible: true });
		} else {
			this.setState({ listsIsVisible: false });
		}
	};
	componentDidMount() {
		if (window.innerWidth < 992) {
			this.setState({ listsIsVisible: false });
		}
		window.addEventListener('resize', () => this.initMenuLists());
	}
	render() {
		let navbarLists = [
			{ name: 'главная', link: '#' },
			{ name: 'услуги', link: '#service' },
			{ name: 'цены', link: '#price' },
			{ name: 'акции', link: '#' },
			{ name: 'контакты', link: '#' }
		];
		let lists = null;
		if (this.state.listsIsVisible) {
			lists = navbarLists.map((item, index) => (
				<a className={styles.Link} key={index} href={item.link}>
					{item.name}
				</a>
			));
		}
		return (
			<section className={styles.Box}>
				<div className={styles.Container}>
					<a className={styles.Brand} href="#s">
						<img className={styles.BrandImage} src={logoImage} alt="logo" />
					</a>
					<button
						className={styles.Toggler}
						type="button"
						onClick={this.menuToggleHandler}
					>
						<Icon name="menu" color="#fff" />
					</button>
				</div>
				<div className={styles.Nav}>{lists}</div>
			</section>
		);
	}
}

export default NavBar;
