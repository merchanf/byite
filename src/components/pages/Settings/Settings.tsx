import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  Title,
  Subtitle,
  Paragraph,
  GooglePlacesAutocomplete,
  TextButton,
  CircularProgress,
} from '@components/atoms/index';
import { Close } from '@components/Icons/index';
import { geoLocationAtom } from '@recoil/index';
import { Layout } from '@components/templates/index';
import { env } from '@constants/index';
import { getGeoLocation, getRestaurantDetails } from '@services/index';
import type IGooglePlacesAutocomplete from '@interfaces/googlePlacesAutocomplete';
import styles from './Settings.module.scss';

const { GOOGLE_API_KEY } = env;

const Settings: FC = () => {
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationAtom);
  const [zone, setZone] = useState<IGooglePlacesAutocomplete>();
  const [loadingGPA, setLoadingGPA] = useState(false);
  const [loadingGeoLocation, setLoadingGeoLocation] = useState(false);
  const [error, setError] = useState<GeolocationPositionError>();

  const getCurrentLocation = async () => {
    setLoadingGeoLocation(true);
    try {
      const {
        coords: { longitude, latitude },
      } = await getGeoLocation();
      setGeoLocation({ lat: latitude, lng: longitude });
    } catch (err) {
      setError(err as GeolocationPositionError);
    } finally {
      setLoadingGeoLocation(false);
    }
  };

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      setLoadingGPA(true);
      if (zone?.value?.place_id) {
        const {
          // needed for a bug in the google places interface
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          location: { latitude: lat, longitude: lng },
        } = await getRestaurantDetails(zone.value.place_id);
        setGeoLocation({ lat, lng });
        setLoadingGPA(false);
      }
    };

    if (zone) fetchRestaurantDetails();
  }, [zone]);

  useEffect(() => {
    if (geoLocation) console.log(geoLocation);
  }, [geoLocation]);

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
            onChange={setZone}
          />
        </div>
        {loadingGPA && <CircularProgress />}
      </div>
      <Subtitle>Buscar restaurantes cerca a mi</Subtitle>
      <div className={styles.Settings__GeoLocation}>
        {error ? (
          <>
            <Close className={styles.Settings__CrossIcon} />
            <p>
              No podemos acceder a tu ubicación. Revisa los permisos de tu
              teléfono o usa otra de las opciones listadas
            </p>
          </>
        ) : (
          <>
            <TextButton onClick={getCurrentLocation}>
              Usar mi ubicación actual
            </TextButton>
            {loadingGeoLocation && <CircularProgress />}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Settings;
