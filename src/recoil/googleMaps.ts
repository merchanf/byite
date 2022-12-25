import { atom } from 'recoil';

const gMapsInstanceAtom = atom<google.maps.Map>({
  key: 'gMapsInstance',
});

export default gMapsInstanceAtom;
