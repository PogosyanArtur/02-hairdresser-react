import React, { Component } from 'react';
import TopLine from '../components/TopLine';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Title from '../components/Title';
import Poster from '../components/Poster';
import Brands from '../components/Brands';
import Prices from '../components/Prices';
import CreditCards from '../components/CreditCards';
import Stocks from '../components/Stocks';
import Map from '../components/Map';
import Footer from '../components/Footer';
import classes from './styles.module.scss';
import Icon from '../components/Icon'
import { Element, animateScroll as scroll, } from 'react-scroll'





class Home extends Component {
	scrollToTop =() => {
		scroll.scrollToTop();
	  }
	render() {
		return (
			<React.Fragment>
				<Element name="home">
					<TopLine />
					<Navbar />
					<Poster title="КРАСОТА В ГЛАЗАХ СМОТРЯЩЕГО" />
				</Element>
				<Element name="service">
					<Title title="Наши услуги" />
					<Service />
					<Poster title="С ПОНЕДЕЛЬНИКА ПО ВОСКРЕСЕНЬЕ С 10:00 ДО 21:00 МЫ ДОСТУПНЫ ДЛЯ ВАС" />
					<Brands />
				</Element>
				<Element name="price">
					<Title title="Наши цены" />
					<Prices />
					<CreditCards />
				</Element>
				<Element name="gallary">
					<Stocks />
				</Element>
				<Element name="contacts">
					<Map />
					<Footer />
				</Element>
				<button className={classes.Btn} onClick={this.scrollToTop} type="button">
					<Icon name="dubleArrow" className={classes.BtnIcon}/>
				 </button>
			</React.Fragment>
		)
	}
};
export default Home;
