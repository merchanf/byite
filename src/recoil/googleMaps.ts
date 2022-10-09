import { atom, selector } from 'recoil';
import { Loader } from '@googlemaps/js-api-loader';
import { setRecoil } from 'recoil-nexus';
import { env } from '@constants/index';

const { GOOGLE_API_KEY } = env;

const gMapsInstanceAtom = atom({
  key: 'geoLocation',
  default: {},
});

const initGoogleMapsSelector = selector({
  key: 'hydrate',
  get: async () => {
    const loader = new Loader({
      apiKey: GOOGLE_API_KEY,
      libraries: ['places'],
      version: 'weekly',
    });

    // Promise
    loader.load().then((google) => {
      const map = document.getElementById('map') as HTMLElement;
      const instance = document && new google.maps.Map(map);
      setRecoil(gMapsInstanceAtom, instance);
    });
  },
});

export { gMapsInstanceAtom, initGoogleMapsSelector };
