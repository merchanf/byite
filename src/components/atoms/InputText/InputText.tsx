import { FC, useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { ValidationTypes } from '@interfaces/index';
import styles from './InputText.module.scss';

interface InputTextProps {
  id?: string;
  className?: string;
  name?: string;
  placeholder?: string;
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
  value,
  onChange,
  onError,
}) => {
  const [text, setText] = useState(value);

  const handleValidation = () => {
    if (onError) {
      if (required && !text) {
        onError(ValidationTypes.required);
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
      type="text"
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
