import axios from 'axios';
import { useState } from 'react';
import EmailTest from 'src/components/email/EmailTest';
import { useInit } from 'src/hooks/useInitialisationCode';

const calId = 'cb27ab3151610b4206a2df3bb7d606f71216f9d3e7ec4b4aa80171f8b2286ee9@group.calendar.google.com'; // patrol gcal

const start = encodeURIComponent(new Date('01 Sept 2023').toISOString());
const end = encodeURIComponent(new Date('01 June 2024').toISOString());

var allGetEvents = [];
var allEvents = [];
var getPromises = [];

async function getPatrol() {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?key=AIzaSyBz4ew-AmtQGL0h6DNYJKhniipIK7eFBUM&timeMin=${start}&timeMax=${end}&singleEvents=true&maxResults=999`;
  try {
    getPromises.push(axios.get(url));
  } catch (error) {
    console.log(error.message);
  }
  allGetEvents = await Promise.all(getPromises);
  console.log(allGetEvents);
}

const Test = () => {
  useInit(() => {
    getPatrol();
  });
  return (
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
};

export default Test;
//

// import { getPosts, getPostsApi } from 'src/lib/getStaticDocs';
// import { rtdb } from 'src/lib/createFirebaseApp';
// import { addRealtimeDoc, deleteRealtimeDoc, getRealtimeDoc, updateRealtimeDoc } from 'src/lib/firebaseRealtimeDatabase';
// import { addDoco, updateDoco } from 'src/lib/firestoreDocument';
// import { listAll, ref, getDownloadURL } from 'firebase/storage';
// import { storage } from 'src/lib/createFirebaseApp';

// const fileRef = ref(storage, 'images');

// listAll(fileRef).then((res) => {
//   const imgArray = [];
//   res.items.forEach(async (itemRef) => {
//     const res = await getDownloadURL(itemRef);
//     imgArray.push({ link: res, label: itemRef.name.split('.')[0] });
//   });
//   console.log(imgArray);
// });

// console.log(res);

// const posts = await getPosts();
// console.log(posts);
// posts.map((post) => {
//   post.data.data = null;
//   post.data.id = null;
// });

// async function updatePosts() {
//   await Promise.all(posts.map((post) => updateDoco('/Posts', post.id, post.data)));
// }

// updatePosts();
