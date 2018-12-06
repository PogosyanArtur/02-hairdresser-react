import React from 'react';
import classes from './NavigationItems.module.scss';

const NavigationItems = props => {
	let navbarLists = [
		{ name: 'главная', link: '#' },
		{ name: 'услуги', link: '#service' },
		{ name: 'цены', link: '#price' },
		{ name: 'акции', link: '#' },
		{ name: 'контакты', link: '#' }
	];

	const styles = [
		classes.Nav,
		props.screen ? classes[`Nav_screen_${props.screen}`] : null,
		props.orientation ? classes[`Nav_orientation_${props.orientation}`] : null,
		props.view ? classes[`Nav_view_${props.view}`] : null,
		props.size ? classes[`Nav_size_${props.view}`] : null
	];

	return (
		<div className={styles.join(' ')}>
			{navbarLists.map((item, index) => (
				<a className={classes.Link} key={index} href={item.link}>
					{item.name}
				</a>
			))}
		</div>
	);
};

export default NavigationItems;
