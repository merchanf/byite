import { selector } from 'recoil';
import { setRecoil } from 'recoil-nexus';
import { uid } from 'uid';
import { sessionStorage, localStorage } from '@constants/globals';
import sessionService from '@services/session';
import initGoogleMaps from '@services/googleMaps';
import firebaseInstanceSelector from './firebase';
import { geoLocationAtom } from './session';

const hydrateSelector = selector({
  key: 'hydrate',
  get: async ({ get }) => {
    const loaded = get(firebaseInstanceSelector);
    if (loaded) {
      let userUid;

      // Setting User Id
      userUid = localStorage.getItem('userUid');
      if (!userUid) {
        userUid = uid();
        localStorage.setItem('userUid', userUid);
      }

      // Setting Session Id
      const urlParams = new URLSearchParams(window.location.search);
      let sessionId = urlParams.get('session');

      if (sessionId) {
        const session = await sessionService.get(sessionId);
        if (session) {
          const { location } = session;
          initGoogleMaps();
          setRecoil(geoLocationAtom, location);
        }
      } else {
        sessionId = await sessionService.create(userUid);
      }

      sessionStorage.setItem('sessionId', sessionId);
      // await dispatch(setSession(sessionId));
      // addSessionToUser(userUid, sessionId);
      // addUserToSession(sessionId, userUid);
    }
    return true;
  },
});

export default hydrateSelector;
