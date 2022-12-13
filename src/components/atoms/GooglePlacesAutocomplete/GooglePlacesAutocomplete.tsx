import { FC } from 'react';
import GPA from 'react-google-places-autocomplete';
import type IGooglePlacesAutocomplete from '@interfaces/googlePlacesAutocomplete';
import styles from './GooglePlacesAutocomplete.styles';

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
        styles,
        placeholder: 'Busca un lugar ej: Zona G',
      }}
    />
  );
};

export default GooglePlacesAutocomplete;
