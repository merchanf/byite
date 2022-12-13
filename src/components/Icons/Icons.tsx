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
  faPersonDress,
  faPersonRunning,
  faPersonWalking,
  faCarSide,
  faSliders,
  faArrowLeft,
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

const WhatsApp: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faWhatsapp} />
);

const Copy: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faCopy} />
);

const PersonDress: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faPersonDress} />
);

const PersonRunning: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faPersonRunning} />
);

const CarSide: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faCarSide} />
);

const PersonWalking: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faPersonWalking} />
);

const Sliders: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faSliders} />
);

const BackArrow: FC<IIconProps> = ({ className }) => (
  <FaIcon className={className} icon={faArrowLeft} />
);

export {
  ArrowRight,
  ArrowLeft,
  BackArrow,
  CarSide,
  Close,
  Copy,
  Directions,
  Error,
  Heart,
  PersonDress,
  PersonRunning,
  PersonWalking,
  Phone,
  Sliders,
  Share,
  WhatsApp,
};
