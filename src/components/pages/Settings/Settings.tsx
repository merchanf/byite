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
import styles from './Settings.module.scss';

const { SWIPE } = routes;

const Settings: FC = () => {
  const [country, setCountry] = useRecoilState(countryAtom);

  return (
    <Layout className={styles.Settings}>
      <Title className={styles.Settings__Title}>Settings</Title>
      <Paragraph>
        Aqui encontrarás opciones que más se ajusten a ti, podrás el rango de
        búsqueda, elegir el país donde quieres buscar o también mostrar o no
        restaurantes que estén cerrados en este momento.
      </Paragraph>
      <Subtitle className={styles.Settings__Subtitle}>
        Elige el país donde quieres buscar
      </Subtitle>
      <CountriesDropdown
        className={styles.Settings__Dropdown}
        onSelect={setCountry}
        selected={country}
      />
      <Subtitle className={styles.Settings__Subtitle}>
        Elige el rango de búsqueda
      </Subtitle>
    </Layout>
  );
};

export default Settings;
