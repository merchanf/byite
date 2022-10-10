import { atom, selector } from 'recoil';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import env from '@constants/env';

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = env;

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

const firebaseLoadedAtom = atom({
  key: 'firebaseLoaded',
  default: false,
});

// Initialize Firebase
const firebaseInstanceSelector = selector({
  key: 'getFirebaseInstance',
  get: ({ get }) => {
    const hasFirebaseLoaded = get(firebaseLoadedAtom);
    if (!hasFirebaseLoaded) {
      const app = initializeApp(config);
      getAnalytics(app);
      getFirestore(app);
      return true;
    }
    return firebaseLoadedAtom;
  },
});

export default firebaseInstanceSelector;
