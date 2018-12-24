import React from 'react';
import NavigationItems from '../NavigationItems';
import classes from './styles.module.scss';


const Footer = () => {
	return (
		<div className={classes.Box}>
			<div className={classes.Navigation}>
				<h4>навигация</h4>
				<NavigationItems orientation="vertical" view="darkish" size="small" />
			</div>
			<div className={classes.Contacts} />
			<div className={classes.Timetable} />
		</div>
	);
};

export default Footer;
