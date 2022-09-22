import { FC } from 'react';
import { Title } from '@components/atoms/index';
import styles from './Settings.module.scss';

const Settings: FC = () => {
  return (
    <div className={styles.Settings}>
      <Title>Settings</Title>
    </div>
  );
};

export default Settings;
