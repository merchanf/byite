import { FC, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Title } from '@components/atoms/index';
import hydrate from '@services/hydrate';
import { routes } from '@constants/index';
import styles from './Launcher.module.scss';

const { SETTINGS } = routes;

const Launcher: FC = () => {
  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    const hydrateApp = async () => {
      await hydrate();
      setIsHydrating(false);
    };

    hydrateApp();
  }, [isHydrating]);

  return isHydrating ? (
    <div className={styles.Launcher}>
      <Title>...loading</Title>
    </div>
  ) : (
    <Navigate to={SETTINGS} />
  );
};

export default Launcher;
