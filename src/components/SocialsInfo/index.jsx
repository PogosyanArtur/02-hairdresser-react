import React from 'react';
import Icon from '../Icon';
import classes from './styles.module.scss';

const socialLists = [
	{ href: '#s', iconName: 'ok' },
	{ href: '#s', iconName: 'facebook' },
	{ href: '#s', iconName: 'vk' }
];

const SocialsInfo = (props) => {
	const styles = [ classes.Link, props.view === 'light' ? classes.Link_view_light : null ];
	return (
		<div className={props.socialInfoClassName}>
			{socialLists.map((item) => {
				return (
					<a key={item.iconName} href={item.href} className={styles.join(' ')}>
						<Icon name={item.iconName} />
					</a>
				);
			})}
		</div>
	);
};

export default SocialsInfo;
