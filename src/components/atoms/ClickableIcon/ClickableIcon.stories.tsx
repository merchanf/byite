/* eslint-disable no-console */
import { Heart } from '@icons/index';
import ClickableIcon from './ClickableIcon';

export default {
  component: ClickableIcon,
  title: 'atoms/Clickable Icon',
};

const onClick = () => {
  console.log('click');
};

export const Default = () => <ClickableIcon onClick={onClick} Icon={Heart} />;
