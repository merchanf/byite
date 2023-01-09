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
import { Instructions, Error, IconLink } from '@components/molecules/index';
import { RestaurantInfo } from '@components/organisms/index';
import { Layout } from '@components/templates';
import type { IGeoLocation } from '@interfaces/index';
import { FaceFrown, FaceDizzy, House } from '@components/icons/index';
import { routes } from '@constants/index';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Swipe.module.scss';

const { BASE } = routes;

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

  const text =
    restaurants && restaurants.length > 0
      ? 'No hay más restaurantes disponibles, toco ir al que dijo tu novia'
      : 'Parece que no hay restaurantes disponibles en tu zona. Prueba ampliando el rango de búsqueda o mudandote a otra parte de la ciudad.';

  const Icon = restaurants && restaurants.length > 0 ? FaceFrown : FaceDizzy;
  return (
    <>
      {restaurants && <Instructions />}
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
        <SwiperSlide>
          <Layout className={styles.Swiper__NoRestaurantsAvailable}>
            <Error Icon={Icon}>{text}</Error>
            <IconLink to={BASE} Icon={House}>
              Búsquemos de nuevo
            </IconLink>
          </Layout>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default withSession(Swipe);
