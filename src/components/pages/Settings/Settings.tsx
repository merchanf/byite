import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { CountriesDropdown } from '@components/atoms/index';
import { SelectLocation } from '@components/beings/index';
import { geoLocationAtom, countryAtom } from '@recoil/index';
import { routes } from '@constants/index';
import { Layout } from '@components/templates/index';
import styles from './Settings.module.scss';

const { SWIPE } = routes;

const Settings: FC = () => {
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationAtom);
  const [country, setCountry] = useRecoilState(countryAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (geoLocation) navigate(SWIPE);
  }, [geoLocation]);

  return (
    <Layout className={styles.Settings}>
      <SelectLocation setGeoLocation={setGeoLocation} country={country} />
      <CountriesDropdown
        className={styles.Settings__Dropdown}
        onSelect={setCountry}
        selected={country}
      />
    </Layout>
  );
};

export default Settings;
