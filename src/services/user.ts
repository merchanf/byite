import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const addSession = async (userUid: string, sessionId: string) => {
  const db = getFirestore();
  const docRef = doc(db, `users/${userUid}`);
  const document = await getDoc(docRef);
  if (document.exists()) {
    const data = document.data();
    let visits = 0;
    let sessions = [];
    if (data?.sessions) {
      visits = data.visits + 1;
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

export default {
  addSession,
};
