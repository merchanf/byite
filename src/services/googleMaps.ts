/* eslint-disable @typescript-eslint/naming-convention */ // Some google maps api types are snake_case

import gMapsInstanceAtom from '@recoil/googleMaps';
import { Loader } from '@googlemaps/js-api-loader';
import { env } from '@constants/index';
import { distance } from '@utils/index';
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

const isNotARestaurant = (types: string[] | undefined) =>
  types?.includes('lodging') || types?.includes('spa');
const excludeNotRestaurantsFromResults = (
  results: google.maps.places.PlaceResult[] | null
) => results?.filter(({ types }) => !isNotARestaurant(types)) || null;
const excludeResultsWithNullPhotos = (
  results: google.maps.places.PlaceResult[] | null
) => results && results.filter(({ photos }) => photos);
const excludeRestaurantsWithLowerRating = (
  results: google.maps.places.PlaceResult[] | null | undefined
) =>
  results?.filter(
    ({ rating, user_ratings_total }) =>
      rating && rating >= 4 && user_ratings_total && user_ratings_total > 50
  );
const filterResults = (results: google.maps.places.PlaceResult[] | null) => {
  let filteredResults = excludeResultsWithNullPhotos(results);
  filteredResults = excludeNotRestaurantsFromResults(filteredResults);
  return excludeRestaurantsWithLowerRating(filteredResults);
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

const restaurantAdapter = (
  placeId: string,
  {
    vicinity,
    geometry,
    name,
    rating,
    international_phone_number,
    price_level,
    photos,
  }: google.maps.places.PlaceResult
) => ({
  placeId,
  address: vicinity,
  location: {
    latitude: geometry?.location?.lat(),
    longitude: geometry?.location?.lng(),
  },
  name,
  rating,
  phoneNumber: international_phone_number,
  pricing: price_level,
  pictures: getPictures(photos),
});

const getRestaurantDetails = async (
  placeId: string
): Promise<google.maps.places.PlaceResult> => {
  return new Promise((resolve) => {
    const request: google.maps.places.PlaceDetailsRequest = {
      placeId,
      fields,
    };
    const service = new google.maps.places.PlacesService(
      document.getElementById('map') as HTMLDivElement
    );
    service.getDetails(request, (details) => {
      if (details) resolve(restaurantAdapter(placeId, details));
    });
  });
};

const nearbySearch = (
  client: google.maps.Map,
  location: google.maps.LatLng,
  radius: number,
  openNow: boolean,
  resultsCallback: (results: google.maps.places.PlaceResult[] | null) => void,
  paginationCallback: (
    pagination: google.maps.places.PlaceSearchPagination | null
  ) => void
) => {
  const service = new google.maps.places.PlacesService(client);
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
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resultsCallback(results);
        paginationCallback(pagination);
      }
    }
  );
};

export { initGoogleMaps, getRestaurantDetails, nearbySearch };
