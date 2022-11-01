import { FC } from 'react';
import {
  faCircleXmark,
  faCircleArrowRight,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
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

const ArrowRight: FC<IFontAwesomeIcon> = ({ className }) => (
  <Icon className={className} icon={faCircleArrowRight} />
);

const ArrowLeft: FC<IFontAwesomeIcon> = ({ className }) => (
  <Icon className={className} icon={faCircleArrowLeft} />
);

export { Close, Heart, ArrowRight, ArrowLeft };
