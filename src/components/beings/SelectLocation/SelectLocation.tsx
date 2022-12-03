import { FC } from 'react';
import { Title, Subtitle, Paragraph } from '@components/atoms/index';
import { CurrentLocation, PlacesAutoComplete } from '@components/organisms';
import { IGeoLocation } from '@interfaces/index';

interface ISelectLocationProps {
  setGeoLocation: (geoLocation: IGeoLocation) => void;
  country: string;
}

const SelectLocation: FC<ISelectLocationProps> = ({
  setGeoLocation,
  country,
}) => {
  return (
    <>
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
    </>
  );
};

export default SelectLocation;
