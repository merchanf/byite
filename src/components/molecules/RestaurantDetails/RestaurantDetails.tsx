import { FC } from 'react';
import type { IRestaurantDetails } from '@services/index';
import {
  TextButton,
  Subtitle,
  Gallery,
  DistanceCalculator,
} from '@components/atoms';
import { Phone, Directions, WhatsApp } from '@icons/index';
import { distanceInMeters, isIos, isMobilePhone } from '@utils/index';
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
  const url = `${protocol}//${host}/shared/${placeId}`;

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

  const radius = distanceInMeters(
    Number(geoLocation?.lat),
    Number(geoLocation?.lng),
    Number(latitude),
    Number(longitude)
  );

  return (
    <div className={styles.RestaurantDetails}>
      <div className={styles.RestaurantDetails__Titles}>
        <Subtitle className={styles.RestaurantDetails__Title}>{name}</Subtitle>
        {geoLocation && latitude && longitude && (
          <DistanceCalculator radius={Math.round(radius)} />
        )}
      </div>
      {showGallery && restaurant?.pictures && (
        <div className={styles.RestaurantDetails__Gallery}>
          <Gallery pictures={pictures} />
        </div>
      )}
      <div className={styles.RestaurantDetails__Buttons}>
        <TextButton Icon={Phone} onClick={callRestaurant}>
          Llamar al restaurante
        </TextButton>
        <TextButton Icon={Directions} onClick={getDirections}>
          Ver en Google Maps
        </TextButton>
        <TextButton onClick={shareRestaurant} Icon={WhatsApp}>
          Compartir en WhatsApp
        </TextButton>
      </div>
    </div>
  );
};

export default RestaurantDetails;
