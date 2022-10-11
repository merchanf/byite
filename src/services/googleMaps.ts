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

const initGoogleMaps = () => {
  const loader = new Loader({
    apiKey: GOOGLE_API_KEY,
    libraries: ['places'],
    version: 'weekly',
  });

  // Promise
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

const getRestaurantDetails = async (placeId: string) => {
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

export { initGoogleMaps, getRestaurantDetails };
