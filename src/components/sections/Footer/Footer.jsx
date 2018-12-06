import React from 'react';
import NavigationItems from '../../ui/NavigationItems/NavigationItems';

import classes from './Footer.module.scss';
const Footer = () => {
	return (
		<div className={classes.Box}>
			<div className={classes.Navigation}>
				<NavigationItems orientation="vertical" view="darkish" />
			</div>
			<div className={classes.Contacts} />
			<div className={classes.Timetable} />
		</div>
	);
};

export default Footer;
