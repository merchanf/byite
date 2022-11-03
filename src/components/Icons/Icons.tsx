import { FC } from 'react';
import {
  faCircleXmark,
  faCircleArrowRight,
  faCircleArrowLeft,
  faHeart,
  faPhone,
  faRoute,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import FaIcon from './BaseFontAwesomeIcon';

export interface IIconProps {
  className?: string;
}

const Close: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faCircleXmark} />
);

const Heart: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faHeart} />
);

const ArrowRight: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faCircleArrowRight} />
);

const ArrowLeft: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faCircleArrowLeft} />
);

const Phone: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faPhone} />
);

const Directions: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faRoute} />
);

const Share: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faShare} />
);

export { Close, Heart, ArrowRight, ArrowLeft, Phone, Directions, Share };
