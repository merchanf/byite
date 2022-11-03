/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react';
import cx from 'classnames';
import { Close } from '@icons/index';
import styles from './Modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  open: boolean;
  title?: string;
}

const Modal: FC<IModalProps> = ({
  className,
  onClose = () => {},
  children,
  open,
  title,
}) => {
  const handleLayoverClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return open ? (
    <div
      className={styles.Modal}
      role="dialog"
      aria-labelledby="modal-title"
      onClick={handleLayoverClick}
      onKeyUp={handleOnKeyDown}
    >
      <div className={cx(styles.Modal__Dialog, className)}>
        {title && (
          <div id="modal-title" className={styles.Modal__Title}>
            {title}
          </div>
        )}
        <div className={styles.Modal__Text}>{children}</div>
        <button
          aria-label="Close modal"
          id="close-modal"
          type="button"
          className={styles.Modal__Close}
          onClick={onClose}
        >
          <Close />
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
