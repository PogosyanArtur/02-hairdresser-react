import React from 'react';
import Icon from '../Icon';
import classes from './styles.module.scss';
import contactsInfoLists from '../../data/contacts'

const ContactsInfo = props => {
	const styles = [classes.Item, props.view === 'light' ? classes.Item_view_light : null, props.view === 'lighten' ? classes.Item_view_lighten : null];
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
