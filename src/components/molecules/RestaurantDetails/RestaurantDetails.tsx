import { FC } from 'react';
import type { IRestaurantDetails } from '@services/index';
import { TextButton } from '@components/atoms';
import { Heart, Phone, Directions, Share } from '@icons/index';
import styles from './RestaurantDetails.module.scss';

interface IRestaurantDetailsProps {
  restaurant: IRestaurantDetails;
}

const RestaurantDetails: FC<IRestaurantDetailsProps> = ({ restaurant }) => {
  const { name, pictures, phoneNumber, address } = restaurant;
  return (
    <div className={styles.RestaurantDetails}>
      <h2>{name}</h2>
      <TextButton Icon={Phone}>Llamar al restaurante</TextButton>
      <TextButton Icon={Directions}>Ver en Google Maps</TextButton>
      <TextButton Icon={Heart}>Agregar a favoritos</TextButton>
      <TextButton Icon={Share}>Compartir</TextButton>
    </div>
  );
};

export default RestaurantDetails;
