import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  Title,
  Subtitle,
  Paragraph,
  GooglePlacesAutocomplete,
  TextButton,
} from '@components/atoms/index';
import { geoLocationAtom } from '@recoil/index';
import { Layout } from '@components/templates/index';
import { env } from '@constants/index';
import { getGeoLocation } from '@services/index';
import styles from './Settings.module.scss';

const { GOOGLE_API_KEY } = env;

const Settings: FC = () => {
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationAtom);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GeolocationPositionError>();

  const getCurrentLocation = async () => {
    setLoading(true);
    try {
      const {
        coords: { longitude, latitude },
      } = await getGeoLocation();
      setGeoLocation({ lat: latitude, lng: longitude });
      setLoading(false);
    } catch (err) {
      setError(err as GeolocationPositionError);
    }
  };

  useEffect(() => {
    if (value) {
      console.log({
        geoLocation,
        value,
        loading,
        error,
      });
    }
  }, [value, geoLocation, loading, error]);

  return (
    <Layout className={styles.Settings}>
      <Title>¿Dónde vamos a comer hoy?</Title>
      <Paragraph>
        Escoge una zona donde te gustaría comer o danos tu ubicación actual
        (vamos a necesitar tu permiso) y Byite te mostrará los mejores
        restaurantes de la zona.
      </Paragraph>
      <Subtitle>Buscar en zona</Subtitle>
      <div className={styles.Settings__Dropdown}>
        <div className={styles.Settings__GooglePlacesAutocomplete}>
          <GooglePlacesAutocomplete
            apiKey={GOOGLE_API_KEY}
            value={value}
            onChange={setValue}
          />
        </div>
        {/* autoCompleteLoading && <CircularProgress /> */}
      </div>
      <Subtitle>Buscar restaurantes cerca a mi</Subtitle>
      <div className={styles.Location__CurrentLocation}>
        <TextButton onClick={getCurrentLocation}>
          Usar mi ubicación actual
        </TextButton>
        {/* (currentLocationLoading && geoLocationLoaded == null) ||
          (geoLocationLoaded && <CircularProgress />)}
        {geoLocationLoaded != null && !geoLocationLoaded && (
          <ClearRoundedIcon className={styles.CrossIcon} />
        ) */}
      </div>
      {/* geoLocationLoaded != null && !geoLocationLoaded && (
        <p>
          No podemos acceder a tu ubicación. Revisa los permisos de tu teléfono
          o usa otra de las opciones listadas
        </p>
      ) */}
    </Layout>
  );
};

export default Settings;
