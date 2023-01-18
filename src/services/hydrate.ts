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

const createNewUser = () => {
  const userUid = uid();
  localStorage.setItem('userUid', userUid);
  userService.create(userUid);
  return userUid;
};

const manageUser = async (): Promise<string> => {
  let userUid = localStorage.getItem('userUid');
  if (!userUid) {
    userUid = createNewUser();
  } else {
    const data = await userService.get(userUid);
    if (!data?.email) {
      userService.updatePrevUser(userUid);
      setRecoil(radiusAtom, 1000);
      setRecoil(openNowAtom, true);
    } else {
      setRecoil(radiusAtom, data.radius);
      setRecoil(openNowAtom, data.openNow);
      setRecoil(emailAtom, data.email);
    }
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
  const userUid = await manageUser();
  const sessionId = (await setSessionId(userUid)) as string;

  sessionStorage.setItem('sessionId', sessionId);
  setRecoil(sessionIdAtom, sessionId);
  setRecoil(userUidAtom, userUid);

  sessionService.create(sessionId);
  userService.addSession(userUid, sessionId);
};

export default hydrate;
