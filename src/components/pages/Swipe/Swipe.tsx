import { FC, useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useRecoilValue } from 'recoil';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import { nearbySearch } from '@services/index';
import type { IRestaurantDetails } from '@services/index';
import {
  gMapsInstanceAtom,
  geoLocationAtom,
  radiusAtom,
  openNowAtom,
} from '@recoil/index';
import { withSession } from '@components/HOCs/index';
import { Instructions } from '@components/molecules/index';
import { RestaurantInfo } from '@components/organisms/index';
import { Layout } from '@components/templates';
import type { IGeoLocation } from '@interfaces/index';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Swipe.module.scss';

const Swipe: FC = () => {
  const gMapsInstance = useRecoilValue(gMapsInstanceAtom);
  const geoLocation = useRecoilValue<IGeoLocation | null>(geoLocationAtom);
  const [restaurants, setRestaurants] = useState<IRestaurantDetails[]>();
  const radius = useRecoilValue<number>(radiusAtom);
  const openNow = useRecoilValue<boolean>(openNowAtom);
  const [nextPagination, setNextPagination] =
    useState<google.maps.places.PlaceSearchPagination | null>();
  const firstRender = useRef(true);

  const handleRestaurants = (result: IRestaurantDetails) => {
    setRestaurants((prevResults) => {
      if (prevResults) return [...prevResults, result];
      return [result];
    });
  };

  useEffect(() => {
    const getRestaurants = () => {
      if (gMapsInstance && geoLocation && !nextPagination) {
        const location = new google.maps.LatLng(
          geoLocation.lat,
          geoLocation.lng
        );
        nearbySearch(
          gMapsInstance,
          location,
          radius,
          openNow,
          handleRestaurants,
          setNextPagination
        );
      }
    };

    if (firstRender.current) {
      getRestaurants();
      firstRender.current = false;
    }
  }, []);

  const handleOnSlideChange = ({ activeIndex }: SwiperClass) => {
    if (restaurants && activeIndex >= restaurants.length - 3) {
      if (nextPagination?.hasNextPage) {
        nextPagination.nextPage();
      }
    }
  };

  return (
    <>
      <Instructions />
      <Swiper
        className={cx(styles.Swiper__Swiper, 'mySwiper swiper-h')}
        spaceBetween={50}
        onSlideChange={handleOnSlideChange}
      >
        {restaurants &&
          restaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.name}>
              <Layout>
                <RestaurantInfo restaurant={restaurant} />
              </Layout>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default withSession(Swipe);
