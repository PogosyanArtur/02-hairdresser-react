import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import MediaQuery from 'react-responsive';
import Contacts from '../Contacts';
import classes from './styles.module.scss';

const mapState = {
	center: [55.876, 37.568],
	zoom: 16
};

const Maps = () => (
	<React.Fragment>
		<MediaQuery query={'(min-width: 0px) and (max-width:991px)'}>
			<section>
				<Contacts />
			</section>
		</MediaQuery>
		<MediaQuery query={'(min-width: 992px)'}>
			<section className={classes.Box}>
				<YMaps>
					<Map width="100%" height="600px" defaultState={mapState}>
						<Placemark
							geometry={[55.876423, 37.56689]}
							options={{ preset: 'islands#icon', iconColor: '#900' }}
						/>
					</Map>
				</YMaps>
				<Contacts contactsClassName={classes.Contacts} />
			</section>
		</MediaQuery>
	</React.Fragment>
);

export default Maps;
