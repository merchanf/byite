import { FC, useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useRecoilValue } from 'recoil';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import { nearbySearch } from '@services/index';
import {
  gMapsInstanceAtom,
  geoLocationAtom,
  radiusAtom,
  openNowAtom,
} from '@recoil/index';
import { Layout } from '@components/templates';
import type { IGeoLocation } from '@interfaces/index';
import 'swiper/css';
import styles from './Swipe.module.scss';

const Swipe: FC = () => {
  const gMapsInstance = useRecoilValue(gMapsInstanceAtom);
  const geoLocation = useRecoilValue<IGeoLocation | null>(geoLocationAtom);
  const [restaurants, setRestaurants] =
    useState<google.maps.places.PlaceResult[]>();
  const radius = useRecoilValue<number>(radiusAtom);
  const openNow = useRecoilValue<boolean>(openNowAtom);
  const [nextPagination, setNextPagination] =
    useState<google.maps.places.PlaceSearchPagination | null>();
  const firstRender = useRef(true);

  const handleRestaurants = (
    results: google.maps.places.PlaceResult[] | null
  ) => {
    if (results) {
      setRestaurants((prevResults) => {
        if (prevResults) return [...prevResults, ...results];
        return results;
      });
    }
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
      } else {
        setRestaurants((prevRestaurants) => {
          if (prevRestaurants) {
            return [
              ...prevRestaurants,
              {
                name: 'No more restaurants',
              },
            ];
          }
          return restaurants;
        });
      }
    }
  };

  return (
    <Swiper
      className={cx(styles.Swiper__Swiper, 'mySwiper swiper-h')}
      spaceBetween={50}
      onSlideChange={handleOnSlideChange}
    >
      {restaurants &&
        restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.name}>
            <Layout>
              <h2 className={styles.Swiper__Slide}>{restaurant.name}</h2>
              <pre>{JSON.stringify(restaurant, null, 2)}</pre>
            </Layout>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Swipe;
