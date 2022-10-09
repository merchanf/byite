import { selector } from 'recoil';
import { uid } from 'uid';
import { sessionStorage, localStorage } from '@constants/globals';
import sessionService from '@services/session';
import firebaseInstanceSelector from './firebase';

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
          initializeGoogleMaps(location);
          setGeoLocation(location);
        }
      } else {
        sessionId = await sessionService.create(userUid);
      }
    }
    return true;
  },
});

export default hydrateSelector;
