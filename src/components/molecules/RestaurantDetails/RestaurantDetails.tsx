import { FC } from 'react';
import type { IRestaurantDetails } from '@services/index';
import { TextButton, Subtitle, Paragraph } from '@components/atoms';
import { Heart, Phone, Directions, Share } from '@icons/index';
import { distance, isIos, isMobilePhone } from '@utils/index';
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
    pictures,
    phoneNumber,
    location: { latitude, longitude },
  } = restaurant;

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
      <TextButton Icon={Heart}>Agregar a favoritos</TextButton>
      <TextButton Icon={Share}>Compartir</TextButton>
    </div>
  );
};

export default RestaurantDetails;
