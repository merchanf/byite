import {
  doc,
  addDoc,
  collection,
  getDoc,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

const get = async (sessionId: string) => {
  const db = getFirestore();
  const docRef = doc(db, `session/${sessionId}`);
  const document = await getDoc(docRef);
  if (document.exists()) return document.data();
  return null;
};

export const create = async (userUid: string) => {
  const db = getFirestore();
  const session = {
    users: [userUid],
    likedRestaurants: [],
    timestamp: new Date(),
  };
  const document = await addDoc(collection(db, 'session'), session);
  return document.id;
};

export const setUserInfo = async (
  firstName: string,
  lastName: string,
  email: string,
  nickName: string,
  userUid: string | undefined = ''
) => {
  const db = getFirestore();
  const docRef = doc(db, 'users', userUid);
  await updateDoc(docRef, {
    firstName,
    lastName,
    email,
    nickName,
  });
};

const setSettings = async (
  userUid: string,
  radius: number,
  openNow: boolean
) => {
  const db = getFirestore();
  const docRef = doc(db, 'users', userUid);
  await updateDoc(docRef, {
    radius,
    openNow,
  });
};

const getRadius = async (userUid: string): Promise<number> => {
  const db = getFirestore();
  const docRef = doc(db, 'users', userUid);
  const document = await getDoc(docRef);
  if (document.exists()) return Number(document.data()?.radius);
  return 1000;
};

const getOpenNow = async (userUid: string): Promise<boolean> => {
  const db = getFirestore();
  const docRef = doc(db, 'users', userUid);
  const document = await getDoc(docRef);
  if (document.exists()) return Boolean(document.data()?.openNow);
  return true;
};

const setOpenNow = async (userUid: string, openNow: boolean) => {
  const db = getFirestore();
  const docRef = doc(db, 'users', userUid);
  await updateDoc(docRef, {
    openNow,
  });
};

const setRadius = async (userUid: string, radius: number) => {
  const db = getFirestore();
  const docRef = doc(db, 'users', userUid);
  await updateDoc(docRef, {
    radius,
  });
};

export default {
  get,
  create,
  setSettings,
  getRadius,
  getOpenNow,
  setRadius,
  setOpenNow,
};
