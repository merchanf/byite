/* eslint-disable no-console */
import { Heart } from '@icons/index';
import IconLink from './IconLink';

export default {
  component: IconLink,
  title: 'molecules/Link with Icon',
};

export const Default = () => <IconLink to="/">Click me!</IconLink>;

export const WithIcon = () => (
  <IconLink to="/" Icon={Heart}>
    Click me!
  </IconLink>
);
