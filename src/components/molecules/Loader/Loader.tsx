import { FC } from 'react';
import cx from 'classnames';
import { LoadingIcon } from '@components/atoms/index';
import styles from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={cx(className, styles.Loader)}>
      <LoadingIcon />
    </div>
  );
};

export default Loader;
