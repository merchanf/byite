import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { IRestaurantDetails } from '@services/index';
import { Gallery, RestaurantDetails } from '@components/molecules';
import { geoLocationAtom } from '@recoil/index';
import type { IGeoLocation } from '@interfaces/index';
import styles from './RestaurantInfo.module.scss';

interface IRestaurantInfoProps {
  restaurant: IRestaurantDetails;
}

const RestaurantInfo: FC<IRestaurantInfoProps> = ({ restaurant }) => {
  const { name, pictures } = restaurant;
  const geoLocation = useRecoilValue<IGeoLocation | null>(geoLocationAtom);
  return (
    <Swiper className={styles.Swiper} direction="vertical">
      {pictures && name && (
        <SwiperSlide>
          <Gallery images={pictures} name={name} />
        </SwiperSlide>
      )}
      <SwiperSlide>
        <RestaurantDetails restaurant={restaurant} geoLocation={geoLocation} />
      </SwiperSlide>
    </Swiper>
  );
};

export default RestaurantInfo;
