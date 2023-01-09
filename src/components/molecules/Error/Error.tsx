import cx from 'classnames';
import { Error as ErrorIcon, IIconProps } from '@icons/index';
import styles from './Error.module.scss';

interface IErrorProps {
  children: string;
  className?: string;
  Icon?: React.FC<IIconProps>;
}

const Error = ({ children, className, Icon = ErrorIcon }: IErrorProps) => {
  return (
    <div className={cx(styles.Error, className)}>
      <Icon className={styles.Error__Icon} />
      <p>{children}</p>
    </div>
  );
};

export default Error;
