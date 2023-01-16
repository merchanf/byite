import { FC, ReactNode } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { IIconProps } from '@icons/types';
import styles from './IconLink.module.scss';

interface IconLinkProps {
  className?: string;
  to?: string;
  Icon?: React.FC<IIconProps>;
  children: ReactNode;
  onClick?: () => void;
}

const IconLink: FC<IconLinkProps> = ({
  className,
  to = '/',
  Icon,
  children,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(to);
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={cx(styles.IconLink, className)}
    >
      {Icon && <Icon className={styles.IconLink__Icon} />}
      <span className={styles.IconLink__Text}>{children}</span>
    </button>
  );
};

export default IconLink;
