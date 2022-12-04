import { FC, useState } from 'react';
import cx from 'classnames';
import { InputText, Label } from '@components/atoms';
import { ValidationTypes } from '@interfaces/index';
import { errorMessages } from '@constants/index';
import styles from './FormText.module.scss';

interface FormTextProps {
  className?: string;
  label: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormText: FC<FormTextProps> = ({
  className,
  label,
  placeholder,
  name,
  onChange,
  required,
  type,
  value,
}) => {
  const [error, setError] = useState<string>();
  const [text, setText] = useState(value || '');
  const elementId = `form-text-${label}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleError = (e: ValidationTypes) => {
    if (e === ValidationTypes.none) {
      setError('');
    } else if (e === ValidationTypes.required) {
      setError(errorMessages.required);
    } else if (e === ValidationTypes.email) {
      setError(errorMessages.email);
    }
  };

  return (
    <span className={cx(className, styles.FormText)}>
      <Label className={styles.FormText__Label} htmlFor={elementId}>
        {label}
        {required && <span>*</span>}
      </Label>
      <InputText
        className={styles.FormText__Input}
        id={elementId}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={text}
        type={type}
        onError={handleError}
        required={required}
      />
      {error && <span className={styles.FormText__Error}>{error}</span>}
    </span>
  );
};

export default FormText;
