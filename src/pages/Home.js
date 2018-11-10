import React from 'react';
import TopLine from '../components/sections/TopLine/TopLine'
import Navbar from '../components/sections/Navbar/Navbar'
import Service from '../components/sections/service/service'
import Poster from '../components/sections/poster/poster'


const Home = () => (
  <>
    <TopLine />
    <Navbar />
    <Poster title="КРАСОТА В ГЛАЗАХ СМОТРЯЩЕГО"/>
    <Service />
    <Poster title="С ПОНЕДЕЛЬНИКА ПО ВОСКРЕСЕНЬЕ С 10:00 ДО 21:00 МЫ ДОСТУПНЫ ДЛЯ ВАС"/>
  </>
)


export default Home