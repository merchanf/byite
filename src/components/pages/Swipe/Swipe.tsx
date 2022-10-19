import { FC, useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { nearbySearch } from '@services/index';
import {
  gMapsInstanceAtom,
  geoLocationAtom,
  radiusAtom,
  openNowAtom,
} from '@recoil/index';
import type { IGeoLocation } from '@interfaces/index';

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

  const getNextPage = async () => {
    if (nextPagination?.hasNextPage) {
      nextPagination.nextPage();
    }
  };

  return (
    <section>
      <h1>Swipe</h1>
      <button type="button" onClick={getNextPage}>
        Click me
      </button>
      {restaurants ? (
        <ol>
          {restaurants.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ol>
      ) : (
        <p>No restaurants</p>
      )}
    </section>
  );
};

export default Swipe;
