import React from 'react';
import TopLine from '../components/sections/TopLine/TopLine'
import Navbar from '../components/sections/Navbar/Navbar'
import Service from '../components/sections/Service/Service'
import Title from '../components/sections/Title/Title'
import Poster from '../components/sections/Poster/Poster'
import Brands from '../components/sections/Brands/Brands'
import Prices from '../components/sections/Prices/Prices'
import CreditCards from '../components/sections/CreditCards/CreditCards'
import Stocks from '../components/sections/Stocks/Stocks';
import Map from '../components/sections/Map/Map'


const Home = () => (
  <>
    <TopLine />
    <Navbar />
    <Poster title="КРАСОТА В ГЛАЗАХ СМОТРЯЩЕГО"/>
    <Title title="Наши услуги"/>
    <Service />
    <Poster title="С ПОНЕДЕЛЬНИКА ПО ВОСКРЕСЕНЬЕ С 10:00 ДО 21:00 МЫ ДОСТУПНЫ ДЛЯ ВАС"/>
    <Brands/>
    <Title title="Наши цены"/>
    <Prices/>
    <CreditCards/>
    <Stocks/>
    <Map/>
  </>
)
export default Home