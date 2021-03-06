import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './styles.module.scss';
import Slider from 'react-slick';
import ArrowButton from '../ArrowButton';

export default class stocks extends Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			slidesToShow: 3,
			speed: 500,
			lazyLoad: true,
			slidesToScroll: 1,
			nextArrow: (
				<ArrowButton
					ArrowButtonRotate="90"
					ArrowButtonStyle={{ marginLeft: '-5px' }}
					right
				/>
			),
			prevArrow: (
				<ArrowButton
					ArrowButtonRotate="-90"
					ArrowButtonStyle={{ marginRight: '-5px' }}
					left
				/>
			),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		};
		const slideBox = {
			margin: '0 15',
			width: '250'
		};
		const images = [
			'6-767x511',
			'2-767x511',
			'5-767x511',
			'13-767x511',
			'17-767x511',
			'18-767x511',
			'19-767x511'
		];
		const slides = images.map((img, index) => {
			return (
				<React.Fragment key={index}>
					<div style={slideBox}>
						<div className={style.ImageBox}>
							<img
								className={style.SlideImage}
								src={require(`../../assets/images/${img}.jpg`)}
								alt="Картинки акции"
							/>
							<div className={style.ImageCover}></div>
						</div>
					</div>
				</React.Fragment>
			);
		});
		return (
				<section className={style.Box}>
					<div className={style.Container}>
						<h2 className={style.Title}>Галерея</h2>
						<Slider {...settings}>{slides}</Slider>
					</div>
				</section>
		);
	}
}
