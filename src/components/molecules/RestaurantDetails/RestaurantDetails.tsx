import { FC } from 'react';
import toast from 'react-hot-toast';
import type { IRestaurantDetails } from '@services/index';
import { TextButton, Subtitle, Paragraph } from '@components/atoms';
import { Heart, Phone, Directions, Copy, Whatsapp } from '@icons/index';
import { distance, isIos, isMobilePhone } from '@utils/index';
import { location } from '@constants/globals';
import type { IGeoLocation } from '@interfaces/index';
import styles from './RestaurantDetails.module.scss';

interface IRestaurantDetailsProps {
  restaurant: IRestaurantDetails;
  geoLocation?: IGeoLocation | null;
}

const RestaurantDetails: FC<IRestaurantDetailsProps> = ({
  restaurant,
  geoLocation,
}) => {
  const {
    name,
    placeId,
    phoneNumber,
    location: { latitude, longitude },
  } = restaurant;

  const { protocol, host } = location;
  const url = `${protocol}//${host}/?restaurant=${placeId}`;

  const callRestaurant = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const getDirections = () => {
    if (isIos() || !isMobilePhone()) {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
      );
    } else {
      window.open(`geo:0,0?q=${latitude},${longitude}`);
    }
  };

  const shareRestaurant = () => {
    const text = encodeURIComponent(
      `¿Enserio nos vamos a perder de esta delicia? ${url}`
    );
    location.href = `whatsapp://send/?text=${text}`;
  };

  const addToFavorites = () => {
    toast('Agregado a favoritos');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast('Enlace copiado al portapapeles');
  };

  return (
    <div className={styles.RestaurantDetails}>
      <div>
        <Subtitle>{name}</Subtitle>
        {geoLocation && latitude && longitude && (
          <Paragraph>
            {`a ${distance(
              geoLocation.lat,
              geoLocation.lng,
              latitude,
              longitude
            )}
            de ti`}
          </Paragraph>
        )}
      </div>
      <TextButton Icon={Phone} onClick={callRestaurant}>
        Llamar al restaurante
      </TextButton>
      <TextButton Icon={Directions} onClick={getDirections}>
        Ver en Google Maps
      </TextButton>
      <TextButton Icon={Heart} onClick={addToFavorites}>
        Agregar a favoritos
      </TextButton>
      <TextButton onClick={shareRestaurant} Icon={Whatsapp}>
        Compartir en WhatsApp
      </TextButton>
      <TextButton onClick={copyToClipboard} Icon={Copy}>
        Copiar al portapapeles
      </TextButton>
    </div>
  );
};

export default RestaurantDetails;
