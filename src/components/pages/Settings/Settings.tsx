import { FC, ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { debounce } from '@mui/material';
import {
  Subtitle,
  Paragraph,
  CountriesDropdown,
  Toggle,
  DistanceCalculator,
} from '@components/atoms/index';
import { DistanceSlider, IconLink } from '@components/molecules/index';
import { Close } from '@icons/index';
import {
  radiusAtom,
  countryAtom,
  openNowAtom,
  userUidAtom,
} from '@recoil/index';
import { routes } from '@constants/index';
import { Layout } from '@components/templates/index';
import { session } from '@services/index';
import styles from './Settings.module.scss';

const { SELECT_LOCATION } = routes;

const Settings: FC = () => {
  const userUid = useRecoilValue(userUidAtom);
  const [country, setCountry] = useRecoilState(countryAtom);
  const [radius, setRadius] = useRecoilState(radiusAtom);
  const [openNow, setOpenNow] = useRecoilState(openNowAtom);

  const debouncedSetRadius = debounce((value: number) => {
    session.setRadius(userUid, value);
  }, 2000);

  const debouncedSetOpenNow = debounce((value: boolean) => {
    session.setOpenNow(userUid, value);
  }, 2000);

  const onToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpenNow(!e.target.checked);
    debouncedSetOpenNow(!e.target.checked);
  };

  const handleOnClick = async () => {
    await session.setSettings(userUid, radius, openNow);
  };

  const handleOnSlide = (value: number) => {
    setRadius(value);
    debouncedSetRadius(value);
  };

  const getValue = (value: number) =>
    value <= 1000 ? value / 100 : 9 + value / 1000;

  return (
    <Layout className={styles.Settings}>
      <Subtitle className={styles.Settings__Subtitle}>
        ¿En que país te encuentras?
      </Subtitle>
      <CountriesDropdown
        className={styles.Settings__Dropdown}
        onSelect={setCountry}
        selected={country}
      />
      <Subtitle className={styles.Settings__Subtitle}>
        ¿Que tanto queremos caminar?
      </Subtitle>
      <DistanceCalculator radius={radius} />
      <DistanceSlider
        className={styles.Settings__Slider}
        value={getValue(radius)}
        onChange={handleOnSlide}
      />
      <Subtitle className={styles.Settings__Subtitle}>
        ¿Quieres ver restaurantes que estén cerrados?
      </Subtitle>
      <span className={styles.Settings__Toggle}>
        <Paragraph>No</Paragraph>
        <Toggle checked={!openNow} onChange={onToggleChange} />
        <Paragraph>Sí</Paragraph>
      </span>
      <IconLink
        Icon={Close}
        className={styles.Settings__Close}
        to={SELECT_LOCATION}
        onClick={handleOnClick}
      >
        Volver atrás
      </IconLink>
    </Layout>
  );
};

export default Settings;
