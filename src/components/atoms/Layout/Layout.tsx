import { FC } from 'react';
import classnames from 'classnames';
import styles from './Layout.module.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ className, children }) => {
  return <div className={classnames(className, styles.Layout)}>{children}</div>;
};

export default Layout;
