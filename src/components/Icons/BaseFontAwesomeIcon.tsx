import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IIcon {
  className?: string;
  icon: IconProp;
}

const Icon: FC<IIcon> = ({ className, icon }) => (
  <span className={className}>
    <FontAwesomeIcon icon={icon} />
  </span>
);

export default Icon;
