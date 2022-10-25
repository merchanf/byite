/* eslint-disable no-console */
import CountriesDropdown from './CountriesDropdown';

export default {
  component: CountriesDropdown,
  title: 'atoms/CountriesDropdown',
};

const onSelect = (countryCode: string) => {
  console.log(countryCode);
};

export const Default = () => (
  <CountriesDropdown onSelect={onSelect} selected="US" />
);
