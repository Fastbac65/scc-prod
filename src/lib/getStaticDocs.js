// fb
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from 'src/lib/createFirebaseApp';

// export function getPosts() {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // const response = await fetch('http://192.168.0.124:5002/api/posts', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify({
//       //     api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
//       //   }),
//       // }).then((res) => res.json());
//       const docs = [];
//       const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
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

export async function getPosts(limit) {
  const response = await fetch('https://scc-serverapi.vercel.app/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
      ...(limit && { limit }),
    }),
  });
  if (!response.ok) {
    throw new Error(`getPosts failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export async function getMembers() {
  const q = query(collection(db, 'members'), orderBy('timestamp', 'desc'));
  const snapshot = await getDocs(q);
  const docs = [];
  snapshot.forEach((doc) => {
    docs.push({ id: doc.id, data: { ...doc.data(), timestamp: doc.data().timestamp?.toDate().getTime() } });
  });
  return docs;
}
