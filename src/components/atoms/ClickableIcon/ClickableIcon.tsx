import { FC } from 'react';
import cx from 'classnames';
import { IIconProps } from '../../icons/index';
import Paragraph from '../Paragraph/Paragraph';
import styles from './ClickableIcon.module.scss';

interface IClickableIconProps {
  Icon: React.FC<IIconProps>;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: string;
}

const ClickableIcon: FC<IClickableIconProps> = (props) => {
  const { className, onClick, disabled, Icon, children } = props;
  return (
    <button
      type="button"
      className={cx(
        styles.ClickableIcon,
        { [styles['ClickableIcon--underline']]: children },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon className={styles.ClickableIcon__Icon} />
      <Paragraph className={styles.ClickableIcon__Text}>{children}</Paragraph>
    </button>
  );
};

export default ClickableIcon;
