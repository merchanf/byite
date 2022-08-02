import { FC } from "react";
import cx from "classnames";

import styles from "./TextButton.module.scss";

interface IButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const TextButton: FC<IButtonProps> = (props) => {
  const { className, children, onClick, disabled } = props;
  return (
    <button
      type="button"
      className={cx(styles.Button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default TextButton;
