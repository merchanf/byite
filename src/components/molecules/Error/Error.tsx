import { FC } from 'react';
import cx from 'classnames';
import { Close } from '@components/Icons/index';
import styles from './Error.module.scss';

interface IError {
  children: string;
  className?: string;
}

const Error: FC<IError> = ({ children, className }) => {
  return (
    <div className={cx(styles.Error, className)}>
      <Close className={styles.Error__Icon} />
      <p>{children}</p>
    </div>
  );
};

export default Error;
