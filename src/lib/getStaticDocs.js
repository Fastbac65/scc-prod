// fb
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from 'src/lib/createFirebaseApp';

export function getPosts() {
  return new Promise(async (resolve, reject) => {
    const q = query(collection(db, 'Posts'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    const docs = [];

    snapshot.forEach((doc) => {
      docs.push({ id: doc.id, data: { ...doc.data(), timestamp: doc.data().timestamp?.toDate().getTime() } });
    });

    resolve(docs);
  });
}

export async function getMembers() {
  return new Promise(async (resolve, reject) => {
    const q = query(collection(db, 'members'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    const docs = [];

    snapshot.forEach((doc) => {
      docs.push({ id: doc.id, data: { ...doc.data(), timestamp: doc.data().timestamp?.toDate().getTime() } });
    });

    resolve(docs);
  });
}
