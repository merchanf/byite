import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { IRestaurantDetails } from '@services/index';
import { Gallery } from '@components/molecules';
import styles from './RestaurantInfo.module.scss';

interface IRestaurantInfoProps {
  restaurant: IRestaurantDetails;
}

const RestaurantInfo: FC<IRestaurantInfoProps> = ({ restaurant }) => {
  const { name, pictures, rating } = restaurant;
  return (
    <Swiper className={styles.Swiper} direction="vertical">
      {pictures && name && (
        <SwiperSlide>
          <Gallery images={pictures} name={name} />
        </SwiperSlide>
      )}
      <SwiperSlide>
        <pre>{JSON.stringify(pictures, null, 2)}</pre>
      </SwiperSlide>
      <SwiperSlide>{rating}</SwiperSlide>
    </Swiper>
  );
};

export default RestaurantInfo;
