import React from 'react';
import { Link } from 'react-scroll'
import classes from './styles.module.scss';

const NavigationItems = props => {
	let navbarLists = [
		{ name: 'главная', link: 'home' },
		{ name: 'услуги', link: 'service' },
		{ name: 'цены', link: 'price' },
		{ name: 'галерея', link: 'gallary' },
		{ name: 'контакты', link: 'contacts' }
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
				<Link 
				className={classes.Link} 
				key={index}
				to={item.link} 
				spy={true} 
				smooth={true} 
				duration={1000}
				offset={-90}
				ignoreCancelEvents={false}>	
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default NavigationItems;
