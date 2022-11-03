/* eslint-disable no-console */
import { Heart } from '@icons/index';
import TextButton from './TextButton';

export default {
  component: TextButton,
  title: 'atoms/Text Button',
};

const onClick = () => {
  console.log('click');
};

export const Default = () => (
  <TextButton onClick={onClick}>Click me!</TextButton>
);

export const Disabled = () => (
  <TextButton onClick={onClick} disabled>
    Click me!
  </TextButton>
);

export const withIcon = () => (
  <TextButton onClick={onClick} Icon={Heart}>
    Click me!
  </TextButton>
);
