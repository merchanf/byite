import { atom } from 'recoil';
import { IGeoLocation, ISession } from '../interfaces/session';

const geoLocationAtom = atom<IGeoLocation | null>({
  key: 'geoLocation',
  default: null,
});

const sessionAtom = atom<ISession | null>({
  key: 'session',
  default: null,
});

const radiusAtom = atom<number>({
  key: 'radius',
  default: 5000,
});

const openNowAtom = atom<boolean>({
  key: 'openNow',
  default: true,
});

const countryAtom = atom<string>({
  key: 'country',
  default: 'CO',
});

export { countryAtom, geoLocationAtom, sessionAtom, radiusAtom, openNowAtom };
