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

export default {
  get,
  create,
  setSettings,
};
