import React from 'react';
import TopLine from '../components/sections/TopLine/TopLine'
import Navbar from '../components/sections/Navbar/Navbar'
import Service from '../components/sections/service/service'
import Title from '../components/sections/title/title'
import Poster from '../components/sections/poster/poster'
import Brands from '../components/sections/brands/brands'
import Prices from '../components/sections/Prices/Prices'
import CreditCards from '../components/sections/creditCards/creditCards'
import Stocks from '../components/sections/stocks/stocks'


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
  </>
)
export default Home