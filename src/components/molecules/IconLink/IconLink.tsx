import { FC } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { IIconProps } from '@icons/index';
import styles from './IconLink.module.scss';

interface IconLinkProps {
  className?: string;
  to: string;
  Icon?: React.FC<IIconProps>;
  children: React.ReactNode;
}

const IconLink: FC<IconLinkProps> = ({ className, to, Icon, children }) => {
  return (
    <span className={cx(styles.IconLink, className)}>
      {Icon && <Icon className={styles.IconLink__Icon} />}
      <Link className={styles.IconLink__Link} to={to}>
        {children}
      </Link>
    </span>
  );
};

export default IconLink;
