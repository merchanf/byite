import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { IGeoLocation } from '@interfaces/index';

const add = async (userUid: string, location: IGeoLocation) => {
  const db = getFirestore();
  const docRef = collection(db, `userXlocation`);
  await addDoc(docRef, {
    userUid,
    location,
    timestamp: new Date(),
  });
};

export default {
  add,
};
