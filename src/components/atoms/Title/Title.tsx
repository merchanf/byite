import { FC } from 'react';
import cx from 'classnames';
import styles from './Title.module.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Title: FC<IProps> = ({ className, children }) => {
  return <h1 className={cx(className, styles.Title)}>{children}</h1>;
};

export default Title;
