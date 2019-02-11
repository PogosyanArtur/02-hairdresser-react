import React from 'react';
import classes from './styles.module.scss';
import ContactsInfo from '../ContactsInfo';

const timeSchedule = [
	{
		name: "Понидельник",
		time: "10:00 - 21:00"
	},
	{
		name: "Вторник",
		time: "10:00 - 21:00"
	},
	{
		name: "Среда",
		time: "10:00 - 21:00"
	},
	{
		name: "Четверг",
		time: "10:00 - 21:00"
	},
	{
		name: "Пятница",
		time: "10:00 - 21:00"
	},
	{
		name: "Суббота",
		time: "10:00 - 20:00"
	},
	{
		name: "Воскресение",
		time: "10:00 - 20:00"
	},
]


const Footer = () => {
	return (
		<footer className={classes.Box}>
			<div className={classes.Content}>
				<div className={classes.Column}>
					<h3 className={classes.Title}>КОНТАКТЫ</h3>
					<ContactsInfo view="lighten" withIcon names={['address', 'mail', 'tel', 'site']} />
				</div>
				<div className={classes.Column}>
					<h3 className={classes.Title}>ВРЕМЯ ОТКРЫТИЯ</h3>
					<ul className={classes.List}>
						{timeSchedule.map(item => {
							return <li key={item.name} className={classes.List__Item}><span>{item.name}</span><span className={classes.List__ItemTime}>{item.time}</span></li>
						})}
					</ul>

				</div>
			</div>
			<div className={classes.Copyright}>
				© Copyright 2018, Все права защищены
			</div>
		</footer>
	);
};

export default Footer;
