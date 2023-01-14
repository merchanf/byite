/* eslint-disable no-console */
import type { IGeoLocation } from '@interfaces/index';
import PlacesAutoComplete from './PlacesAutoComplete';

export default {
  component: PlacesAutoComplete,
  title: 'organisms/PlacesAutoComplete',
};

const setGeoLocation = (geoLocation: IGeoLocation) => {
  console.log('setGeoLocation', geoLocation);
};

export const Default = () => (
  <PlacesAutoComplete setGeoLocation={setGeoLocation} country="CO" />
);
