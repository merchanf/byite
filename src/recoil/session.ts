import { atom } from 'recoil';
import { getCountry } from '@utils/index';
import { IGeoLocation } from '../interfaces/session';

const geoLocationAtom = atom<IGeoLocation | null>({
  key: 'geoLocation',
  default: null,
});

const sessionIdAtom = atom<string>({
  key: 'sessionId',
  default: '',
});

const userUidAtom = atom<string>({
  key: 'userUid',
  default: '',
});

const radiusAtom = atom<number>({
  key: 'radius',
});

const openNowAtom = atom<boolean>({
  key: 'openNow',
  default: true,
});

const countryAtom = atom<string>({
  key: 'country',
  default: getCountry(),
});

const firstNameAtom = atom<string>({
  key: 'name',
  default: '',
});

const lastNameAtom = atom<string>({
  key: 'lastName',
  default: '',
});

const emailAtom = atom<string>({
  key: 'email',
  default: '',
});

const nickNameAtom = atom<string>({
  key: 'nickName',
  default: '',
});

export {
  countryAtom,
  geoLocationAtom,
  radiusAtom,
  openNowAtom,
  firstNameAtom,
  lastNameAtom,
  emailAtom,
  nickNameAtom,
  sessionIdAtom,
  userUidAtom,
};
