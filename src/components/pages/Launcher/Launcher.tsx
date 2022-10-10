import { FC, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import hydrate from '@services/hydrate';
import { Title } from '@components/atoms';
import { routes } from '@constants/index';
import Logo from '@assets/logo.webp';
import styles from './Launcher.module.scss';

const { SETTINGS } = routes;

const Launcher: FC = () => {
  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    const hydrateApp = async () => {
      await hydrate();
      // setIsHydrating(false);
    };

    hydrateApp();
  }, [isHydrating]);

  return isHydrating ? (
    <div className={styles.Launcher}>
      <img className={styles.Launcher__Logo} src={Logo} alt="Logo de Byite" />
      <Title className={styles.Launcher__Title}>Byite</Title>
    </div>
  ) : (
    <Navigate to={SETTINGS} />
  );
};

export default Launcher;
