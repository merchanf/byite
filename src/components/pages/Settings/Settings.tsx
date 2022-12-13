import { FC, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  ClickableIcon,
  Title,
  Subtitle,
  Paragraph,
  CountriesDropdown,
  Toggle,
} from '@components/atoms/index';
import { Close } from '@icons/index';
import { DistanceSlider } from '@components/molecules/index';
import { radiusAtom, countryAtom, openNowAtom } from '@recoil/index';
import { routes } from '@constants/index';
import { Layout } from '@components/templates/index';
import styles from './Settings.module.scss';

const { SELECT_LOCATION } = routes;

const Settings: FC = () => {
  const [country, setCountry] = useRecoilState(countryAtom);
  const [radius, setRadius] = useRecoilState(radiusAtom);
  const [openNow, setOpenNow] = useRecoilState(openNowAtom);
  const navigate = useNavigate();

  const onToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpenNow(!e.target.checked);
  };

  const handleOnclick = () => {
    navigate(SELECT_LOCATION);
  };

  const valueLabelFormat = (value: number) => {
    if (value < 1000) {
      return `${value} m`;
    }
    return `${value / 1000} km`;
  };

  const getETA = (distance: number) => {
    const time = (distance * 60) / 4830;
    return Math.ceil(time);
  };

  return (
    <Layout className={styles.Settings}>
      <ClickableIcon
        className={styles.Settings__Close}
        onClick={handleOnclick}
        Icon={Close}
      />
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
      <Paragraph>
        {valueLabelFormat(radius)} - {getETA(radius)}min
      </Paragraph>
      <DistanceSlider
        className={styles.Settings__Slider}
        value={radius / 100}
        onChange={setRadius}
      />
      <Subtitle className={styles.Settings__Subtitle}>
        ¿Quieres ver restaurantes que estén cerrados?
      </Subtitle>
      <span className={styles.Settings__Toggle}>
        <Paragraph>No</Paragraph>
        <Toggle checked={!openNow} onChange={onToggleChange} />
        <Paragraph>Sí</Paragraph>
      </span>
    </Layout>
  );
};

export default Settings;
