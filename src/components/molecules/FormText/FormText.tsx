import { FC } from 'react';
import cx from 'classnames';
import { InputText, Label } from '@components/atoms';
import styles from './FormText.module.scss';

interface FormTextProps {
  className?: string;
}

const FormText: FC<FormTextProps> = ({ className }) => {
  return (
    <span className={cx(className, styles.FormText)}>
      <Label className={styles.FormText__Label} htmlFor="name">
        Name
      </Label>
      <InputText
        className={styles.FormText__Input}
        id="name"
        placeholder="Name"
      />
    </span>
  );
};

export default FormText;
