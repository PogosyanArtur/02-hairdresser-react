import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import style from "./stocks.module.scss"
import Slider from "react-slick"


function NextArrow(props) {
  return (
    <button
      className={props.className}
      style={{ ...props.style, display: "block", background: "red" }}
      onClick={props.onClick}
    />
  );
}

function PrevArrow(props) {
  return (
    <button
      className={props.className}
      style={{ ...props.style, display: "block", background: "green" }}
      onClick={props.onClick}
    />
  );
}


export default class stocks extends Component {

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      lazyLoad: true,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    const slideBox = {
      margin:'0 15',
      width:'250'
    }
    return (
      <div className={style.Box}>
        <div className={style.Container}>
          <h2 className={style.Title}>Наши аккции</h2>
          <Slider {...settings}>          
                <div style={slideBox}><img className={style.SlideImage} src={require("../../../assets/images/6-767x511.jpg")} alt="Картинки акции"/></div>
                <div style={slideBox}><img className={style.SlideImage} src={require("../../../assets/images/2-767x511.jpg")} alt="Картинки акции"/></div>
                <div style={slideBox}><img className={style.SlideImage} src={require("../../../assets/images/5-767x511.jpg")} alt="Картинки акции"/></div>
                <div style={slideBox}><img className={style.SlideImage} src={require("../../../assets/images/6-767x511.jpg")} alt="Картинки акции"/></div>
                <div style={slideBox}><img className={style.SlideImage} src={require("../../../assets/images/2-767x511.jpg")} alt="Картинки акции"/></div>
                <div style={slideBox}><img className={style.SlideImage} src={require("../../../assets/images/5-767x511.jpg")} alt="Картинки акции"/></div>
          </Slider>
        </div>
      </div>
    )
  }
}


