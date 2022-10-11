import { uid } from 'uid';
import { getRecoil, setRecoil } from 'recoil-nexus';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { sessionStorage, localStorage } from '@constants/globals';
import { firebaseAppAtom, geoLocationAtom, sessionAtom } from '@recoil/index';
import sessionService from './session';
import userService from './user';
import { initGoogleMaps } from './googleMaps';

const initFirebase = async () => {
  const app = getRecoil(firebaseAppAtom);
  if (!app) {
    getAnalytics(app);
    getFirestore(app);
  }
};

const setUserUid = (): string => {
  let userUid = localStorage.getItem('userUid');
  if (!userUid) {
    userUid = uid();
    localStorage.setItem('userUid', userUid);
  }
  return userUid;
};

const setSessionId = async (userUid: string) => {
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
  return sessionId;
};

const hydrate = async () => {
  initFirebase();
  const userUid = setUserUid();
  const sessionId = await setSessionId(userUid);

  sessionStorage.setItem('sessionId', sessionId);
  setRecoil(sessionAtom, { userUid, sessionId });
  sessionService.addUser(sessionId, userUid);
  userService.addSession(userUid, sessionId);
};

export default hydrate;
