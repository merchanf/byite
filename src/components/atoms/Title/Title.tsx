import { FC } from 'react';
import cx from 'classnames';
import styles from './Title.module.scss';

interface IProps {
  className?: string;
  text: string;
}

const Title: FC<IProps> = ({ className, text }) => {
  return <h1 className={cx(className, styles.Title)}>{text}</h1>;
};

export default Title;
