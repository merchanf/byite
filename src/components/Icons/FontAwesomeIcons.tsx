import { FC } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

interface IFontAwesomeIcon {
  className?: string;
}

const Close: FC<IFontAwesomeIcon> = ({ className }) => (
  <Icon className={className} icon={faCircleXmark} />
);

const Heart: FC<IFontAwesomeIcon> = ({ className }) => (
  <Icon className={className} icon={faCircleXmark} />
);

export { Close, Heart };
