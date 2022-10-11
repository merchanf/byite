import { FC } from 'react';
import cx from 'classnames';
import styles from './Paragraph.module.scss';

interface IProps {
  className?: string;
  children: string;
}

const Paragraph: FC<IProps> = ({ className, children }) => (
  <p className={cx(styles.Paragraph, className)}>{children}</p>
);

export default Paragraph;
