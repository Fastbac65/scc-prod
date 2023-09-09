import { doc, collection, getDoc, deleteDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from './createFirebaseApp';

//all error handling will occur in the call function location
// return the Promise to be 'await' -ed

export const addDoco = (collectionName, documentId, documentObj) => {
  const docRef = doc(collection(db, collectionName), documentId);
  // const docRef = doc(db, collectionName, documentId);
  return setDoc(docRef, { ...documentObj });
};

export const updateDoco = (collectionName, documentId, documentObj) => {
  const docRef = doc(db, collectionName, documentId);
  return updateDoc(docRef, { ...documentObj });
};

export const getDoco = (collectionName, documentId) => {
  const docRef = doc(db, collectionName, documentId);
  return getDoc(docRef);
};

export const deleteDoco = (collectionName, documentId) => {
  return deleteDoc(doc(db, collectionName, documentId));
};
