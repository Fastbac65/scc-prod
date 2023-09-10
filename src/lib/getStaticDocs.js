// fb
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from 'src/lib/createFirebaseApp';

// export function getPosts() {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // const response = await fetch('http://192.168.0.220:5002/api/posts', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify({
//       //     api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
//       //   }),
//       // }).then((res) => res.json());
//       const docs = [];
//       const q = query(collection(db, 'Posts'), orderBy('timestamp', 'desc'));
//       const snapshot = await getDocs(q);
//       snapshot.forEach((doc) => {
//         docs.push({ id: doc.id, data: { ...doc.data() } });
//       });

//       resolve(docs);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }

export function getPosts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://scc-serverapi.vercel.app/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
        }),
      }).then((res) => res.json());

      resolve(response);
    } catch (error) {
      console.log(error);
    }
  });
}

export async function getMembers() {
  return new Promise(async (resolve, reject) => {
    try {
      const q = query(collection(db, 'members'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      const docs = [];

      snapshot.forEach((doc) => {
        docs.push({ id: doc.id, data: { ...doc.data(), timestamp: doc.data().timestamp?.toDate().getTime() } });
      });

      resolve(docs);
    } catch (error) {
      console.log(error);
    }
  });
}
