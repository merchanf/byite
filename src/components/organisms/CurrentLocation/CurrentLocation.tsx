import { FC, useState } from 'react';
import { Error } from '@components/molecules/index';
import { TextButton, CircularProgress } from '@components/atoms/index';
import { getGeoLocation } from '@services/index';
import type { IGeoLocation } from '@interfaces/index';
import styles from './CurrentLocation.module.scss';

interface ICurrentLocation {
  setGeoLocation: (geoLocation: IGeoLocation) => void;
}

const CurrentLocation: FC<ICurrentLocation> = ({ setGeoLocation }) => {
  const [error, setError] = useState<GeolocationPositionError>();
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async () => {
    setLoading(true);
    try {
      const {
        coords: { longitude, latitude },
      } = await getGeoLocation();
      setGeoLocation({ lat: latitude, lng: longitude });
    } catch (err) {
      setError(err as GeolocationPositionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.CurrentLocation}>
      {error ? (
        <Error>
          No podemos acceder a tu ubicación. Revisa los permisos de tu teléfono
          o usa otra de las opciones listadas
        </Error>
      ) : (
        <>
          <TextButton onClick={getCurrentLocation}>
            Usar mi ubicación actual
          </TextButton>
          {loading && <CircularProgress />}
        </>
      )}
    </div>
  );
};

export default CurrentLocation;
