/* eslint-disable no-console */
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';

export default {
  component: GooglePlacesAutocomplete,
  title: 'GooglePlacesAutocomplete',
};

const onChange = (data: string) => {
  console.log(`data`, data);
};

export const Default = () => (
  <GooglePlacesAutocomplete onChange={onChange} value="" apiKey="ApiKey" />
);
