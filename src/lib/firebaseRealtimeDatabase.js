import { set, ref, update, get } from 'firebase/database';
import { rtdb } from './createFirebaseApp';

//all error handling will occur in the call function location
// return the Promise to be 'await' -ed

export const addRealtimeDoc = (realtimeDbPath, documentObj) => {
  const docRef = ref(rtdb, realtimeDbPath);
  // const docRef = ref(rtdb, realtimeDbPath, );
  return set(docRef, { ...documentObj, data: { ...documentObj.data, timestamp: new Date().getTime() } });
};

export const updateRealtimeDoc = (realtimeDbPath, documentObj) => {
  const docRef = ref(rtdb, realtimeDbPath);
  return update(docRef, documentObj);
};

export const getRealtimeDoc = (realtimeDbPath) => {
  const docRef = ref(rtdb, realtimeDbPath);
  return get(docRef);
};

export const deleteRealtimeDoc = (realtimeDbPath, docToDelete) => {
  return update(ref(rtdb, realtimeDbPath), { [docToDelete]: null });
};
