import { FC } from 'react';
import cx from 'classnames';
import { InputText, Label } from '@components/atoms';
import styles from './FormText.module.scss';

interface FormTextProps {
  className?: string;
  label: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormText: FC<FormTextProps> = ({
  className,
  label,
  placeholder,
  onChange,
  name,
  value,
}) => {
  const elementId = `form-text-${label}`;
  return (
    <span className={cx(className, styles.FormText)}>
      <Label className={styles.FormText__Label} htmlFor={elementId}>
        {label}
      </Label>
      <InputText
        className={styles.FormText__Input}
        id={elementId}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </span>
  );
};

export default FormText;
