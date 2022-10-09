import gMapsInstanceAtom from '@recoil/googleMaps';
import { Loader } from '@googlemaps/js-api-loader';
import { env } from '@constants/index';
import { setRecoil } from 'recoil-nexus';

const { GOOGLE_API_KEY } = env;

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

export default initGoogleMaps;
