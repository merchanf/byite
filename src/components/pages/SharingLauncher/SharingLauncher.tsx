import { FC, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, useParams } from 'react-router-dom';
import hydrate from '@services/hydrate';
import { Title } from '@components/atoms';
import { routes } from '@constants/index';
import { gMapsInstanceAtom } from '@recoil/index';
import Logo from '@assets/logo.webp';
import { IRestaurantDetails, getRestaurantDetails } from '@services/index';
import styles from './SharingLauncher.module.scss';

const { PROFILE } = routes;

const SharingLauncher: FC = () => {
  const [isHydrating, setIsHydrating] = useState(true);
  const [restaurant, setRestaurant] = useState<IRestaurantDetails>();
  const gMapsInstance = useRecoilValue(gMapsInstanceAtom);
  const { placeId } = useParams();
  console.log('hola');

  const callback = (restaurantDetails: IRestaurantDetails) => {
    setRestaurant(restaurantDetails);
  };

  useEffect(() => {
    const hydrateApp = async () => {
      await hydrate();
    };

    hydrateApp();
  }, []);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      await getRestaurantDetails(placeId, gMapsInstance, callback);
      setIsHydrating(false);
    };
    if (placeId && gMapsInstance) fetchRestaurantDetails();
    console.log({
      placeId,
      gMapsInstance,
    });
  }, [placeId, gMapsInstance]);

  return isHydrating ? (
    <div className={styles.Launcher}>
      <img className={styles.Launcher__Logo} src={Logo} alt="Logo de Byite" />
      <Title className={styles.Launcher__Title}>Byite</Title>
    </div>
  ) : (
    <Navigate to={PROFILE} state={{ restaurant }} />
  );
};

export default SharingLauncher;
