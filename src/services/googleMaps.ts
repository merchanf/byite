/* eslint-disable @typescript-eslint/naming-convention */ // Some google maps api types are snake_case

import gMapsInstanceAtom from '@recoil/googleMaps';
import { Loader } from '@googlemaps/js-api-loader';
import { env } from '@constants/index';
import { setRecoil } from 'recoil-nexus';

const { GOOGLE_API_KEY } = env;

const fields = [
  'international_phone_number',
  'name',
  'rating',
  'vicinity',
  'geometry',
  'price_level',
  'photos',
];

const checkIfIsNotARestaurant = (types: string[] | undefined) =>
  types?.includes('lodging') || types?.includes('spa');

const filterResults = (results: google.maps.places.PlaceResult[]) => {
  return (
    results
      ?.filter(({ types }) => !checkIfIsNotARestaurant(types))
      .filter(({ photos }) => Boolean(photos))
      .filter(
        ({ rating, user_ratings_total }) =>
          rating && rating >= 4 && user_ratings_total && user_ratings_total > 50
      ) ?? []
  );
};

const initGoogleMaps = () => {
  const loader = new Loader({
    apiKey: GOOGLE_API_KEY,
    libraries: ['places'],
    version: 'weekly',
  });

  loader.load().then((google) => {
    const map = document.getElementById('map') as HTMLElement;
    const gMapsInstance = new google.maps.Map(map);
    setRecoil(gMapsInstanceAtom, gMapsInstance);
  });
};

const getPictures = (photos: google.maps.places.PlacePhoto[] | undefined) => {
  if (!photos) return null;
  const pictures = photos.map((photo) =>
    photo.getUrl({ maxWidth: 1280, maxHeight: 720 })
  );
  if (pictures && pictures.length > 1) pictures.shift();
  return pictures;
};

interface IRestaurantDetails {
  placeId: string | undefined;
  address: string | undefined;
  location: { latitude: number | undefined; longitude: number | undefined };
  name: string | undefined;
  rating: number | undefined;
  phoneNumber: string | undefined;
  pictures: string[] | null;
}

const dataMapper = ({
  place_id,
  vicinity,
  geometry,
  name,
  rating,
  international_phone_number,
  photos,
}: google.maps.places.PlaceResult) => ({
  placeId: place_id,
  address: vicinity,
  location: {
    latitude: geometry?.location?.lat(),
    longitude: geometry?.location?.lng(),
  },
  name,
  rating,
  phoneNumber: international_phone_number,
  pictures: getPictures(photos),
});

const getRestaurantDetails = async (
  placeId: string | undefined,
  googleMapsInstance: google.maps.Map,
  callback: (result: IRestaurantDetails) => void
) => {
  if (!placeId) return;
  const request: google.maps.places.PlaceDetailsRequest = {
    placeId,
    fields,
  };
  const service = new google.maps.places.PlacesService(googleMapsInstance);
  service.getDetails(request, (details) => {
    if (details) callback(dataMapper(details));
  });
};

const nearbySearch = (
  gMapsInstance: google.maps.Map,
  location: google.maps.LatLng,
  radius: number,
  openNow: boolean,
  resultsCallback: (result: IRestaurantDetails) => void,
  paginationCallback: (
    pagination: google.maps.places.PlaceSearchPagination | null
  ) => void
) => {
  const service = new google.maps.places.PlacesService(gMapsInstance);
  const request: google.maps.places.PlaceSearchRequest = {
    location,
    radius,
    openNow,
    type: 'restaurant',
  };
  service.nearbySearch(
    request,
    (
      results: google.maps.places.PlaceResult[] | null,
      status: google.maps.places.PlacesServiceStatus,
      pagination: google.maps.places.PlaceSearchPagination | null
    ) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const filteredResults = filterResults(results);
        filteredResults.forEach(({ place_id }) =>
          getRestaurantDetails(place_id, gMapsInstance, resultsCallback)
        );
        paginationCallback(pagination);
      }
    }
  );
};

export { initGoogleMaps, nearbySearch, getRestaurantDetails };
export type { IRestaurantDetails };
