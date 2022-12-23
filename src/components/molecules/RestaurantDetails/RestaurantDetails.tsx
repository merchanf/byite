import { FC } from 'react';
import toast from 'react-hot-toast';
import type { IRestaurantDetails } from '@services/index';
import { TextButton, Subtitle, Paragraph, Gallery } from '@components/atoms';
import { Heart, Phone, Directions, Copy, WhatsApp } from '@icons/index';
import { distance, isIos, isMobilePhone } from '@utils/index';
import { location } from '@constants/globals';
import type { IGeoLocation } from '@interfaces/index';
import styles from './RestaurantDetails.module.scss';

interface IRestaurantDetailsProps {
  restaurant: IRestaurantDetails;
  geoLocation?: IGeoLocation | null;
  showGallery?: boolean;
}

const RestaurantDetails: FC<IRestaurantDetailsProps> = ({
  restaurant,
  geoLocation,
  showGallery = false,
}) => {
  const {
    name,
    placeId,
    phoneNumber,
    location: { latitude, longitude },
    pictures,
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

  const picturess = [
    'https://via.placeholder.com/600x930/9B59B6?text=El%20Corral',
    'https://via.placeholder.com/600x930/2E86C1?text=El%20Corral',
    'https://via.placeholder.com/600x930/1ABC9C?text=El%20Corral',
    'https://via.placeholder.com/600x930/F1C40F?text=El%20Corral',
    'https://via.placeholder.com/600x930/7F8C8D?text=El%20Corral',
    'https://via.placeholder.com/600x930/7F8C8D?text=El%20Corral',
  ];

  return (
    <div className={styles.RestaurantDetails}>
      <div className={styles.RestaurantDetails__Titles}>
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
      {showGallery && restaurant?.pictures && (
        <div className={styles.RestaurantDetails__Gallery}>
          <Gallery pictures={picturess} />
        </div>
      )}
      <div className={styles.RestaurantDetails__Buttons}>
        <TextButton Icon={Phone} onClick={callRestaurant}>
          Llamar al restaurante
        </TextButton>
        <TextButton Icon={Directions} onClick={getDirections}>
          Ver en Google Maps
        </TextButton>
        <TextButton Icon={Heart} onClick={addToFavorites}>
          Agregar a favoritos
        </TextButton>
        <TextButton onClick={shareRestaurant} Icon={WhatsApp}>
          Compartir en WhatsApp
        </TextButton>
        <TextButton onClick={copyToClipboard} Icon={Copy}>
          Copiar al portapapeles
        </TextButton>
      </div>
    </div>
  );
};

export default RestaurantDetails;
