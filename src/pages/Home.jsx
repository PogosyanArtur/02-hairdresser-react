import React from 'react';
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

const Home = () => (
	<>
		<TopLine />
		<Navbar />
		<Poster title="КРАСОТА В ГЛАЗАХ СМОТРЯЩЕГО" />
		<Title title="Наши услуги" />
		<Service />
		<Poster title="С ПОНЕДЕЛЬНИКА ПО ВОСКРЕСЕНЬЕ С 10:00 ДО 21:00 МЫ ДОСТУПНЫ ДЛЯ ВАС" />
		<Brands />
		<Title title="Наши цены" />
		<Prices />
		<CreditCards />
		<Stocks />
		<Map />
		<Footer />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
	</>
);
export default Home;
