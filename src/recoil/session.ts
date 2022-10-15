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

export { geoLocationAtom, sessionAtom };
