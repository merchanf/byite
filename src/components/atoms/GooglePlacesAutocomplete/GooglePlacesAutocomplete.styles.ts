import { StylesConfig } from 'react-select';
import { colors } from '@constants/index';

const { deepChampagne, oldBurgundy } = colors;

type OptionType = {
  label: string;
  value: string;
};

const autocompleteStyles: StylesConfig<OptionType, boolean> = {
  control: (provided) => ({
    ...provided,
    border: `1px solid ${deepChampagne[500]}`,
    borderRadius: '19px',
    '&:hover': {
      borderColor: deepChampagne[600],
    },
    '&:active': {
      borderColor: deepChampagne[700],
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
      backgroundColor: deepChampagne[50],
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: oldBurgundy[500],
    paddingLeft: `12px`,
  }),
};

export default autocompleteStyles;
