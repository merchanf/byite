import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  Title,
  Subtitle,
  Paragraph,
  CountriesDropdown,
} from '@components/atoms/index';
import { CurrentLocation, PlacesAutoComplete } from '@components/organisms';
import { geoLocationAtom, countryAtom } from '@recoil/index';
import { routes } from '@constants/index';
import { Layout } from '@components/templates/index';
import styles from './SelectLocation.module.scss';

const { SWIPE } = routes;

const SelectLocation: FC = () => {
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationAtom);
  const [country, setCountry] = useRecoilState(countryAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (geoLocation) navigate(SWIPE);
  }, [geoLocation]);

  return (
    <Layout className={styles.SelectLocation}>
      <Title>¿Dónde vamos a comer hoy?</Title>
      <Paragraph>
        Escoge una zona donde te gustaría comer o danos tu ubicación actual
        (vamos a necesitar tu permiso) y Byite te mostrará los mejores
        restaurantes de la zona.
      </Paragraph>
      <Subtitle>Buscar en zona</Subtitle>
      <PlacesAutoComplete setGeoLocation={setGeoLocation} country={country} />
      <Subtitle>Buscar restaurantes cerca a mi</Subtitle>
      <CurrentLocation setGeoLocation={setGeoLocation} />
      <CountriesDropdown
        className={styles.Settings__Dropdown}
        onSelect={setCountry}
        selected={country}
      />
    </Layout>
  );
};

export default SelectLocation;
