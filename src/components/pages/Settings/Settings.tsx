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
import styles from './SelectLocationPage.module.scss';

const { SWIPE } = routes;

const SettingsPage: FC = () => {
  const [country, setCountry] = useRecoilState(countryAtom);
  const navigate = useNavigate();

  return (
    <Layout className={styles.Settings}>
      <CountriesDropdown
        className={styles.Settings__Dropdown}
        onSelect={setCountry}
        selected={country}
      />
    </Layout>
  );
};

export default SettingsPage;
