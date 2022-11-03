import { FC } from 'react';
import {
  faCircleXmark,
  faCircleArrowRight,
  faCircleArrowLeft,
  faHeart,
  faPhone,
  faRoute,
  faShare,
  faXmark,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import FaIcon from './BaseFontAwesomeIcon';

export interface IIconProps {
  className?: string;
}

const Error: FC<IIconProps> = ({ className }) => (
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

const Close: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faXmark} />
);

const Whatsapp: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faWhatsapp} />
);

const Copy: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faCopy} />
);

export {
  Close,
  Copy,
  Heart,
  ArrowRight,
  ArrowLeft,
  Phone,
  Directions,
  Share,
  Error,
  Whatsapp,
};
