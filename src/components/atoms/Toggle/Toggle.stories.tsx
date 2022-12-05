/* eslint-disable no-console */
import { ChangeEvent } from 'react';
import Toggle from './Toggle';

export default {
  component: Toggle,
  title: 'atoms/Toggle',
};

const onchange = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.checked);
};

export const Default = () => <Toggle />;

export const Checked = () => <Toggle defaultChecked />;

export const WithOnChange = () => <Toggle onChange={onchange} />;
