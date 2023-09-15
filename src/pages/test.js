import { useState } from 'react';
import EmailTest from 'src/components/email/EmailTest';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';

const QuillNoSSR = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: [3, 4, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    ['link'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    // [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const Test = () => {
  const [value, setValue] = useState('');

  const handleEditorUpdates = (content, delta, source, editor) => {
    console.log(content);
    console.log(delta);
    setValue(content);
  };

  return (
    <>
      {/* <Quill value={value} setValue={handleEditorUpdates} /> */}
      <QuillNoSSR theme="bubble" placeholder="Write something epic... select text to format!" modules={modules} value={value} onChange={handleEditorUpdates} />
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
    </>
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
