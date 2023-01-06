import { FC, useState } from 'react';
import cx from 'classnames';
import { Close } from '@icons/index';
import { Paragraph, ClickableIcon } from '@components/atoms/index';
import { Layout } from '@components/templates/index';
import styles from './Instructions.module.scss';

const Instructions: FC = () => {
  // get value from local storage
  const openAndNeverShowAgain = window.localStorage.getItem(
    'openAndNeverShowAgain'
  );
  const [open, setOpen] = useState(true);

  const close = () => {
    setOpen(false);
  };

  const closeAndDontShowAgain = () => {
    close();
    window.localStorage.setItem('openAndNeverShowAgain', 'true');
  };

  if (openAndNeverShowAgain) {
    return null;
  }

  return (
    <div
      className={cx({
        [styles.Instructions]: open,
        [styles['Instructions--closed']]: !open,
      })}
    >
      <Layout className={styles.Instructions__Layout}>
        <div className={styles.Instructions__Top}>
          <div className={styles.Instructions__Left}>
            <Paragraph className={styles.Instructions__Text}>
              Si haces click en este lado, podras ver{' '}
              <b>las fotos anteriores.</b>
            </Paragraph>
            <Paragraph className={styles.Instructions__Text}>
              Si deslizas hacia este lado, podras ver{' '}
              <b>los anteriores restaurantes.</b>
            </Paragraph>
          </div>
          <div className={styles.Instructions__DottedLine} />
          <div className={styles.Instructions__Right}>
            <Paragraph className={styles.Instructions__Text}>
              Pero si haces click en este lado, podras ver{' '}
              <b>las siguientes fotos.</b>
            </Paragraph>
            <Paragraph className={styles.Instructions__Text}>
              Si deslizas hacia este lado, podras ver{' '}
              <b>los siguientes restaurantes.</b>
            </Paragraph>
          </div>
        </div>
        <div
          className={cx(
            styles.Instructions__DottedLine,
            styles.Instructions__Horizontal
          )}
        />
        <div className={styles.Instructions__Bottom}>
          <div>
            <ClickableIcon
              className={styles.Instructions__Icon}
              Icon={Close}
              onClick={close}
            >
              Cerrar
            </ClickableIcon>
            <ClickableIcon
              className={styles.Instructions__Icon}
              Icon={Close}
              onClick={closeAndDontShowAgain}
            >
              Cerrar y no volver a mostrar
            </ClickableIcon>
          </div>
          <Paragraph className={styles.Instructions__Text}>
            Si deslizas hacia abajo podras ver{' '}
            <b>informacion detallada del restaurante.</b>
          </Paragraph>
        </div>
      </Layout>
    </div>
  );
};

export default Instructions;
