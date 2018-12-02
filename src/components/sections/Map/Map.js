import React from 'react'
import { YMaps, Map,Placemark } from 'react-yandex-maps';

const mapState = {
  center: [55.876000, 37.569890],
  zoom: 17,
};

const Maps = () => (
  <YMaps >
      <Map width="100%" height="600px" defaultState={mapState} >
        <Placemark geometry={[55.876423, 37.566890]} options={{preset:'islands#icon',iconColor:'#900'}} />
      </Map>
  </YMaps>
);

export default Maps