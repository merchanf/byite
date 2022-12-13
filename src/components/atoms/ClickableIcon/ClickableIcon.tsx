import { FC } from 'react';
import cx from 'classnames';
import { IIconProps } from '@icons/index';
import styles from './ClickableIcon.module.scss';

interface IClickableIconProps {
  Icon: React.FC<IIconProps>;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ClickableIcon: FC<IClickableIconProps> = (props) => {
  const { className, onClick, disabled, Icon } = props;
  return (
    <button
      type="button"
      className={cx(styles.ClickableIcon, className)}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon className={styles.ClickableIcon__Icon} />
    </button>
  );
};

export default ClickableIcon;
