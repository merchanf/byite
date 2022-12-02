/* eslint-disable no-console */
import type IGooglePlacesAutocomplete from '@interfaces/googlePlacesAutocomplete';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';

export default {
  component: GooglePlacesAutocomplete,
  title: 'atoms/GooglePlacesAutocomplete',
};

const onChange = (data: IGooglePlacesAutocomplete) => {
  console.log(`data`, data);
};

export const Default = () => (
  <GooglePlacesAutocomplete
    onChange={onChange}
    value=""
    apiKey="ApiKey"
    country="CO"
  />
);
