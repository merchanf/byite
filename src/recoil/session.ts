import { atom } from 'recoil';
import { IGeoLocation } from '../types/atoms';

const geoLocationAtom = atom<IGeoLocation>({
  key: 'geoLocation',
  default: {
    lat: 0,
    lng: 0,
  },
});

const firebaseLoadedAtom = atom({
  key: 'firebaseLoaded',
  default: false,
});

export { geoLocationAtom, firebaseLoadedAtom };
