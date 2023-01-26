import { FC, useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import hydrate from '@services/hydrate';
import { Title } from '@components/atoms';
import { routes } from '@constants/index';
import Logo from '@assets/logo.webp';
import styles from './Launcher.module.scss';

const { SELECT_LOCATION, PROFILE } = routes;

const Launcher: FC = () => {
  const [isHydrating, setIsHydrating] = useState(true);
  const params = useParams();

  useEffect(() => {
    const hydrateApp = async () => {
      await hydrate();
      setIsHydrating(false);
    };

    if (isHydrating) hydrateApp();
  }, []);

  const navigateTo = params.placeId ? PROFILE : SELECT_LOCATION;
  const state = params.placeId ? { placeId: params.placeId } : {};

  return isHydrating ? (
    <div className={styles.Launcher}>
      <img
        className={styles.Launcher__Logo}
        src={Logo}
        alt="Logo de ESCOGETU"
      />
      <Title className={styles.Launcher__Title}>ESCOGETU</Title>
    </div>
  ) : (
    <Navigate to={navigateTo} state={state} />
  );
};

export default Launcher;
