import { atom } from 'recoil';

const gMapsInstanceAtom = atom<google.maps.Map | null>({
  key: 'gMapsInstance',
  default: null,
});

export default gMapsInstanceAtom;
