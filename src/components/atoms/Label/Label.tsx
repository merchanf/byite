// create a react label component

import { FC } from 'react';
import cx from 'classnames';
import styles from './Label.module.scss';

interface LabelProps {
  className?: string;
  htmlFor?: string;
  children?: string;
}

const Label: FC<LabelProps> = ({ className, htmlFor, children }) => {
  return (
    <label className={cx(className, styles.Label)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
