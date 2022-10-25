import { FC } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './CountriesDropdown.css';

interface ICountriesDropdown {
  onSelect: (countryCode: string) => void;
  selected: string;
  className?: string;
}

const CountriesDropdown: FC<ICountriesDropdown> = ({
  onSelect,
  selected,
  className,
}) => {
  return (
    <ReactFlagsSelect
      className={className}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

export default CountriesDropdown;
