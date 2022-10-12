import { atom } from 'recoil';
import { IGeoLocation, ISession } from '../interfaces/session';

const geoLocationAtom = atom<IGeoLocation>({
  key: 'geoLocation',
  default: {
    lat: 0,
    lng: 0,
  },
});

const sessionAtom = atom<ISession | null>({
  key: 'session',
  default: null,
});

export { geoLocationAtom, sessionAtom };
