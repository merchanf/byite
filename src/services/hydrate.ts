import { uid } from 'uid';
import { getRecoil, setRecoil } from 'recoil-nexus';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { sessionStorage, localStorage } from '@constants/globals';
import {
  firebaseAppAtom,
  geoLocationAtom,
  sessionIdAtom,
  userUidAtom,
  emailAtom,
  radiusAtom,
  openNowAtom,
  analyticsAtom,
} from '@recoil/index';
import sessionService from './session';
import userService from './user';
import { initGoogleMaps } from './googleMaps';

const initFirebase = async () => {
  const app = getRecoil(firebaseAppAtom);
  if (!app) {
    const analytics = getAnalytics(app);
    getFirestore(app);
    setRecoil(analyticsAtom, analytics);
  }
};

const setUserUid = (): string => {
  let userUid = localStorage.getItem('userUid');
  if (!userUid) {
    userUid = uid();
    localStorage.setItem('userUid', userUid);
    userService.create(userUid);
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
      setRecoil(geoLocationAtom, location);
    }
  } else {
    sessionId = await sessionService.create(userUid);
  }
  return sessionId;
};

const hydrate = async () => {
  initFirebase();
  initGoogleMaps();
  const userUid = setUserUid();
  const sessionId = (await setSessionId(userUid)) as string;
  const email = await userService.getEmail(userUid);
  const radius = await sessionService.getRadius(userUid);
  console.log('hydrate', {
    userUid,
    sessionId,
    email,
    radius,
  });
  const openNow = await sessionService.getOpenNow(userUid);

  sessionStorage.setItem('sessionId', sessionId);
  setRecoil(sessionIdAtom, sessionId);
  setRecoil(userUidAtom, userUid);
  setRecoil(emailAtom, email);
  setRecoil(radiusAtom, radius);
  setRecoil(openNowAtom, openNow);

  sessionService.create(sessionId);
  userService.addSession(userUid, sessionId);
};

export default hydrate;
