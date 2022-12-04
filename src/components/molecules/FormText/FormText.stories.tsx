/* eslint-disable no-console */
import FormText from './FormText';

export default {
  component: FormText,
  title: 'molecules/Form text',
};

export const Default = () => (
  <FormText
    label="¿Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
  />
);

export const WithName = () => (
  <FormText
    label="¿Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
  />
);

export const WithValue = () => (
  <FormText
    label="Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
    value="Faustino Asprilla"
  />
);

export const WithOnChange = () => (
  <FormText
    label="¿Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
    onChange={(e) => console.log(e.target.value)}
  />
);

export const WithRequired = () => (
  <FormText
    label="¿Cómo te llamas?"
    placeholder="Radamel Falcao Garcia"
    name="name"
    required
  />
);

export const WithEmail = () => (
  <FormText
    label="¿Cómo es tu correo?"
    placeholder="radamel.falcao@fcf.com"
    name="name"
    type="email"
  />
);

export const WithRequiredEmail = () => (
  <FormText
    label="¿Cómo es tu correo?"
    placeholder="Radamel Falcao Garcia"
    name="name"
    type="email"
    required
  />
);
