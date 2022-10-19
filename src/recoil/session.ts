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
  default: 10000,
});

const openNowAtom = atom<boolean>({
  key: 'openNow',
  default: true,
});

export { geoLocationAtom, sessionAtom, radiusAtom, openNowAtom };
