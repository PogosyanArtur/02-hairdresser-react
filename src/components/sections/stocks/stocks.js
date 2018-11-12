import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './stocks.module.scss'
import { Carousel } from 'react-responsive-carousel';

export default class stocks extends Component {
  render() {
    return (
      <div className={style.Box}>
        <div className={style.Container}>
          <h2 className={style.Stock}>Наши аккции</h2>
          <Carousel showStatus={false} showThumbs={false} emulateTouch width="500px">
                <div>
                    <img src={require("../../../assets/images/6-767x511.jpg")} alt="Картинки акции"/>
                </div>
                <div>
                    <img src={require("../../../assets/images/2-767x511.jpg")} alt="Картинки акции"/>
                </div>
                <div>
                    <img src={require("../../../assets/images/5-767x511.jpg")} alt="Картинки акции"/>
                </div>
            </Carousel>
        </div>
      </div>
    )
  }
}


