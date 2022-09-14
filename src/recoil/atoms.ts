import { atom } from 'recoil';

const textState = atom<number>({
  key: 'textState',
  default: 0,
});

export default textState;
