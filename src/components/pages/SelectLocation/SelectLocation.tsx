import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Title, Subtitle, Paragraph } from '@components/atoms/index';
import { Sliders } from '@icons/index';
import { IconLink } from '@components/molecules/index';
import { CurrentLocation, PlacesAutoComplete } from '@components/organisms';
import { geoLocationAtom, countryAtom } from '@recoil/index';
import { routes } from '@constants/index';
import { Layout } from '@components/templates/index';
import { IGeoLocation } from '@interfaces/index';
import styles from './SelectLocation.module.scss';

const { SWIPE, SETTINGS } = routes;

const SelectLocation: FC = () => {
  const [, setGeoLocation] = useRecoilState(geoLocationAtom);
  const country = useRecoilValue(countryAtom);
  const navigate = useNavigate();

  const nextPage = (value: IGeoLocation | null) => {
    if (value) {
      setGeoLocation(value);
      navigate(SWIPE);
    }
  };

  return (
    <Layout className={styles.SelectLocation}>
      <Title>¿Dónde vamos a comer hoy?</Title>
      <Paragraph>
        Escoge una zona donde te gustaría comer o danos tu ubicación actual
        (vamos a necesitar tu permiso) y Byite te mostrará los mejores
        restaurantes de la zona.
      </Paragraph>
      <Subtitle>Buscar en zona</Subtitle>
      <PlacesAutoComplete setGeoLocation={nextPage} country={country} />
      <Subtitle>Buscar restaurantes cerca a mi</Subtitle>
      <CurrentLocation setGeoLocation={nextPage} />
      <IconLink
        to={SETTINGS}
        Icon={Sliders}
        className={styles.SelectLocation__MoreOptions}
      >
        Más opciones
      </IconLink>
    </Layout>
  );
};

export default SelectLocation;
