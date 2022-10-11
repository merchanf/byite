import { FC } from 'react';
import cx from 'classnames';
import styles from './Subtitle.module.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Subtitle: FC<IProps> = ({ className, children }) => {
  return <h2 className={cx(className, styles.Subtitle)}>{children}</h2>;
};

export default Subtitle;
