import { FC } from 'react';
import cx from 'classnames';
import styles from './InputText.module.scss';

interface InputTextProps {
  id?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FC<InputTextProps> = ({
  className,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      id={id}
      className={cx(className, styles.InputText)}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
