/* eslint-disable no-console */
import FormName from './FormText';

export default {
  component: FormName,
  title: 'molecules/Form text',
};

export const Default = () => (
  <FormName
    label="Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
  />
);

export const WithName = () => (
  <FormName
    label="Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
  />
);

export const WithValue = () => (
  <FormName
    label="Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
    value="Radamel Falcao Garcia"
  />
);

export const WithOnChange = () => (
  <FormName
    label="Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
    onChange={(e) => console.log(e.target.value)}
  />
);
