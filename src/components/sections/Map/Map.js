import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import MediaQuery from 'react-responsive';

const mapState = {
	center: [55.876, 37.568],
	zoom: 16
};

const Maps = () => (
	<React.Fragment>
		<MediaQuery minWidth={992}>
			<YMaps>
				<Map width="100%" height="600px" defaultState={mapState}>
					<Placemark
						geometry={[55.876423, 37.56689]}
						options={{ preset: 'islands#icon', iconColor: '#900' }}
					/>
				</Map>
			</YMaps>
		</MediaQuery>
		<MediaQuery minWidth={0}>
			<YMaps>
				<Map width="100%" height="300px" defaultState={mapState}>
					<Placemark
						geometry={[55.876423, 37.56689]}
						options={{ preset: 'islands#icon', iconColor: '#900' }}
					/>
				</Map>
			</YMaps>
		</MediaQuery>
	</React.Fragment>
);

export default Maps;
