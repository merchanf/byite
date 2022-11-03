import { FC } from 'react';
import cx from 'classnames';
import { IIconProps } from '@icons/index';
import styles from './TextButton.module.scss';

interface IProps {
  Icon?: React.FC<IIconProps>;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const TextButton: FC<IProps> = (props) => {
  const { className, children, onClick, disabled, Icon } = props;
  return (
    <button
      type="button"
      className={cx(styles.Button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className={styles.Button__Icon} />}
      {children}
    </button>
  );
};

export default TextButton;
