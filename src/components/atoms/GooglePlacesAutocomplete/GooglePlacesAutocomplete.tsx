import { FC } from 'react';
import GPA_ from 'react-google-places-autocomplete';
import type IGooglePlacesAutocomplete from '@interfaces/googlePlacesAutocomplete';
import styles from './GooglePlacesAutocomplete.styles';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const GPA = GPA_.default ? GPA_.default : GPA_;

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
