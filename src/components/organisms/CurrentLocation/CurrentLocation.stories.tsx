/* eslint-disable no-console */
import type { IGeoLocation } from '@interfaces/index';
import CurrentLocation from './CurrentLocation';

export default {
  component: CurrentLocation,
  title: 'organisms/CurrentLocation',
};

const setGeoLocation = (geoLocation: IGeoLocation) => {
  console.log('setGeoLocation', geoLocation);
};

export const Default = () => (
  <CurrentLocation setGeoLocation={setGeoLocation} />
);
