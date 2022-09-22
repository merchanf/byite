import { atom } from 'recoil';

const textState = atom<number>({
  key: 'textState',
  default: 0,
});

const firebaseAtom = atom({
  key: 'firebase',
  default: {
    loaded: false,
  },
});

export { textState, firebaseAtom };
