import {
  doc,
  addDoc,
  collection,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

const get = async (sessionId: string) => {
  const db = getFirestore();
  const docRef = doc(db, `session/${sessionId}`);
  const document = await getDoc(docRef);
  if (document.exists()) return document.data();
  return null;
};

const addUser = async (sessionId: string, userUid: string) => {
  const db = getFirestore();
  const docRef = doc(db, `session/${sessionId}`);
  const document = await getDoc(docRef);
  if (document.exists()) {
    const storedDoc = document.data();
    if (!storedDoc.users.includes(userUid)) {
      storedDoc.users = [...storedDoc.users, userUid];
    }
    await setDoc(docRef, storedDoc, { merge: true });
  }
  return null;
};

export const create = async (userUid: string) => {
  const db = getFirestore();
  const userObject = {
    users: [userUid],
    likedRestaurants: [],
    timestamp: new Date(),
  };
  const document = await addDoc(collection(db, 'session'), userObject);
  return document.id;
};

const session = {
  get,
  addUser,
  create,
};

export default session;
