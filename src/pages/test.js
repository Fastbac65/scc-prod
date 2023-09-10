import EmailTest from 'src/components/email/EmailTest';
import { getPosts, getPostsApi } from 'src/lib/getStaticDocs';
// import { rtdb } from 'src/lib/createFirebaseApp';
import { addRealtimeDoc, deleteRealtimeDoc, getRealtimeDoc, updateRealtimeDoc } from 'src/lib/firebaseRealtimeDatabase';
import { updateDoco } from 'src/lib/firestoreDocument';

// const posts = await getPosts();
// console.log(posts);
// posts.map((post) => {
//   post.data.data = null;
//   post.data.id = null;
// });
// console.log(posts);

async function rtPosts() {
  await Promise.all(posts.map((post) => updateDoco('/Posts', post.id, post.data)));
}

// deleteRealtimeDoc('/', 'posts');

// const postRef = ref(rtdb, 'posts/');
// const listener = onValue(postRef, (snapshot) => {
//   const postsArray = Object.values(snapshot.val());
//   console.log(postsArray[0]);
// });

// listener();

// const read = await getRealtimeDoc('Posts/');

// console.log(Object.values(read.val()));

// rtPosts();

const test = () => (
  <EmailTest
    name="Bob"
    email="Bob@this.com"
    link="https://scc-prod.vercel.app"
    booking={{
      bookingType: 'Evening',
      bookingDate: 'Wed Sep 06 2023 19:18:17 GMT+1000 (Australian Eastern Standard Time)',
      occasion: '21st',
      phoneNumber: '+61407945789',
      email: 'terry.durnin@yahoo.com',
      fullName: 'Terence Durnin',
    }}
  />
);

export default test;
//
