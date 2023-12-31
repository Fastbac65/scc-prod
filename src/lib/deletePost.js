import { deleteDoco } from './firestoreDocument';
import deleteFile from './deleteFile';
import { deleteRealtimeDoc } from './firebaseRealtimeDatabase';

const deletePost = (postDoc) => {
  return new Promise(async (resolve, reject) => {
    try {
      const postImageDeletePromises = [];

      if (postDoc.data.images.length) {
        // should never be zero but just in case of bug
        //check if the first image is from the library
        const notLibrary = postDoc.data.images[0].src.split(postDoc.data.userId)[1]; // if it is from library then 'library' will be undefined
        if (notLibrary) {
          postDoc.data.images.forEach(async (image) => {
            const postImageName = image.src.split(postDoc.data.userId + '%2F')[1].split('?')[0]; // strip the filename from the URL
            const filePath = 'posts/' + postDoc.data.userId + '/' + postImageName; // storage file path
            postImageDeletePromises.push(deleteFile(filePath)); // all deletes go almost in parallel so we dont await them
          });
          await Promise.all(postImageDeletePromises); // we await all promises from the delete requests
        }
      }
      await deleteDoco('posts', postDoc.id);
      await deleteRealtimeDoc('Posts', postDoc.id);
      resolve();
    } catch (error) {
      console.log(error.message, error);
      reject(new Error('post delete failed: ', error.message));
    }
  });
};

export default deletePost;
