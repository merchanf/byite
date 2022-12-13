import { atom } from 'recoil';
import { getCountry } from '@utils/index';
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
  default: 1000,
});

const openNowAtom = atom<boolean>({
  key: 'openNow',
  default: true,
});

const countryAtom = atom<string>({
  key: 'country',
  default: getCountry(),
});

export { countryAtom, geoLocationAtom, sessionAtom, radiusAtom, openNowAtom };
