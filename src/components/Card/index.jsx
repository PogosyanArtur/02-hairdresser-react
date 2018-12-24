import React from 'react';
import classnames from 'classnames';
import style from './styles.module.scss';

export default params => {
	return (
		<div className={classnames(style.Box, params.cardClassName)}>
			<div className={style.ImageBox}>
				<img className={style.Image} src={params.src} alt={params.alt} />
			</div>
			<h3 className={style.Title}> {params.title} </h3>
			<p className={style.Context}> {params.context}</p>
			<button className={style.Button}>Узнать больше</button>
		</div>
	);
};
