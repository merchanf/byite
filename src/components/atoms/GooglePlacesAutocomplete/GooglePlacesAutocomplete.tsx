import { FC } from 'react';
import GPA from 'react-google-places-autocomplete';
import { colors } from '@constants/index';
import type IGooglePlacesAutocomplete from '@interfaces/googlePlacesAutocomplete';
import { StylesConfig } from 'react-select';

const { red, oldBurgundy } = colors;

type OptionType = {
  label: string;
  value: string;
};

const autocompleteStyles: StylesConfig<OptionType, boolean> = {
  control: (provided) => ({
    ...provided,
    border: `1px solid ${red[100]}`,
    borderRadius: '19px',
    '&:hover': {
      borderColor: red[200],
    },
    '&:active': {
      borderColor: red[300],
    },
  }),
  input: (provided) => ({
    ...provided,
    paddingLeft: '12px',
    color: oldBurgundy[500],
  }),
  placeholder: (provided) => ({
    ...provided,
    paddingLeft: '12px',
    fontSize: '12px',
  }),
  option: (provided) => ({
    ...provided,
    color: oldBurgundy[500],
    '&:hover': {
      backgroundColor: red[50],
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: oldBurgundy[500],
    paddingLeft: `12px`,
  }),
};
interface IProps {
  apiKey: string;
  value?: string;
  onChange: (value: IGooglePlacesAutocomplete) => void;
  country: string;
}

const GooglePlacesAutocomplete: FC<IProps> = ({
  apiKey,
  value,
  onChange,
  country,
}) => {
  return (
    <GPA
      apiKey={apiKey}
      apiOptions={{ language: 'es', region: 'co' }}
      autocompletionRequest={{
        componentRestrictions: {
          country: [country],
        },
      }}
      minLengthAutocomplete={3}
      selectProps={{
        value,
        onChange,
        styles: autocompleteStyles,
        placeholder: 'Busca un lugar ej: Zona G',
      }}
    />
  );
};

export default GooglePlacesAutocomplete;
