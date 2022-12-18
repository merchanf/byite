import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const addSession = async (userUid: string, sessionId: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userUid}`);
  const document = await getDoc(docRef);
  if (document.exists()) {
    const data = document.data();
    let visits = 0;
    let sessions = [];
    if (data?.visits) {
      visits = data.visits + 1;
    } else {
      visits = 1;
    }

    if (data?.sessions) {
      sessions = [...data.sessions, sessionId];
    } else {
      sessions = [sessionId];
    }

    const storedDoc = { ...data, visits, sessions };
    await setDoc(docRef, storedDoc, { merge: true });
  }
  return document.id;
};

export const addInfo = async (
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

const create = async (userUid: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userUid}`);
  await setDoc(
    docRef,
    {
      userUid,
      sessions: [],
      timestamp: new Date(),
    },
    { merge: true }
  );
  return null;
};

const getEmail = async (userUid: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userUid}`);
  const document = await getDoc(docRef);
  if (document.exists()) {
    const data = document.data();
    return data?.email || '';
  }
  return '';
};

export default {
  addSession,
  addInfo,
  create,
  getEmail,
};
