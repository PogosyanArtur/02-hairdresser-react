import React from 'react';
import Icon from '../../../icon/icon';
import classes from './ContactsInfo.module.scss';

const contactsInfoLists = [
	{
		name: 'time',
		iconName: 'clock',
		IconSize: 20,
		href: null,
		context: 'ПН-ВС 10:00 - 21:00',
		lable: null
	},
	{
		name: 'mail',
		iconName: 'mail',
		IconSize: 20,
		href: 'mailto:iris9009797@yandex.ru',
		context: 'iris9009797@yandex.ru',
		lable: 'E-mail: '
	},
	{
		name: 'tel',
		iconName: 'call',
		IconSize: 20,
		href: 'tel:+74999009797',
		context: '+7(499) 900-97-97',
		lable: 'Тел. '
	},
	{
		name: 'address',
		iconName: null,
		IconSize: 20,
		href: null,
		context: 'Город Москва, улица Керамический проезд дом 53 корп.1',
		lable: 'Адрес: '
	},
	{
		name: 'site',
		iconName: null,
		IconSize: 20,
		href: 'http://irisstyle.ru',
		context: 'irisstyle.ru',
		lable: 'Сайт: '
	}
];

const ContactsInfo = props => {
	const styles = [classes.Item, props.view === 'light' ? classes.Item_view_light : null];
	return (
		<div className={props.contactsInfoClassName}>
			{props.names.map(name => {
				return contactsInfoLists.map(item => {
					if (name === item.name) {
						if (!item.href) {
							return (
								<span key={item.iconName} className={styles.join(' ')}>
									{props.withIcon ? (
										<Icon
											name={item.iconName}
											size={item.size}
											style={{ marginRight: '5px' }}
										/>
									) : null}
									{`${props.label ? item.lable : ''} ${item.context}`}
								</span>
							);
						} else {
							return (
								<a
									href={item.href}
									key={item.iconName}
									className={styles.join(' ')}
								>
									{props.withIcon ? (
										<Icon
											name={item.iconName}
											size={item.size}
											style={{ marginRight: '5px' }}
										/>
									) : null}
									{`${props.label ? item.lable : ''} ${item.context}`}
								</a>
							);
						}
					}
					return null;
				});
			})}
		</div>
	);
};

export default ContactsInfo;
