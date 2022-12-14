import { FC, useState } from 'react';
import cx from 'classnames';
import { ValidationTypes } from '@interfaces/index';
import styles from './InputText.module.scss';

interface InputTextProps {
  id?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onError?: (error: ValidationTypes) => void;
  required?: boolean;
}

const InputText: FC<InputTextProps> = ({
  className,
  id,
  name,
  placeholder,
  required,
  value = '',
  type = 'text',
  onChange,
  onError,
}) => {
  const [text, setText] = useState<string>(value);

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleValidation = () => {
    if (onError && required) {
      if (!text) {
        onError(ValidationTypes.required);
      } else if (type === 'email' && !isValidEmail(text)) {
        console.log('type', type);
        onError(ValidationTypes.email);
      } else {
        onError(ValidationTypes.none);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      id={id}
      className={cx(className, styles.InputText)}
      type={type}
      placeholder={placeholder}
      value={text}
      name={name}
      onChange={handleChange}
      onFocus={handleChange}
      onBlur={handleValidation}
      required={required}
    />
  );
};

export default InputText;
