import React from 'react';
import ContactsInfo from '../../ui/Contacts/ContactsInfo/ContactsInfo';
import classes from './Contacts.module.scss';

const Contacts = props => {
	return (
		<div className={[props.contactsClassName, classes.Box].join(' ')}>
			<h2 className={classes.Title}>Контакты</h2>
			<ContactsInfo label view="light" names={['address', 'tel', 'mail', 'site']} />
		</div>
	);
};

export default Contacts;
