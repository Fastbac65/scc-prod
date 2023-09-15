import { Box, Button, DialogActions, DialogContent, DialogContentText, Paper, Stack, TextField, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AddImages from './AddImages';
import EditPostImageList from './EditPostImageList';
import uploadFile from 'src/lib/uploadFile';
import deleteFile from 'src/lib/deleteFile';
import { addDoco, updateDoco } from 'src/lib/firestoreDocument';
import resizeImage from 'src/lib/resizeImage';
import { useSettingsContext } from 'src/components/settings';
import { updateRealtimeDoc } from 'src/lib/firebaseRealtimeDatabase';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
const QuillNoSSR = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => (
    <p>
      <sup>.....</sup>
    </p>
  ),
});

const modules = {
  toolbar: [
    [{ header: [6, false] }],
    // ['bold', 'italic', 'underline'],
    ['bold', 'italic'],
    ['link'],
    // [{ list: 'ordered' }, { list: 'bullet' }],
    // [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    // ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const EditPost = ({ postDoc }) => {
  const [value, setValue] = useState(postDoc.data?.content);
  const handleEditorUpdates = (content, delta, source, editor) => {
    setValue(content);
  };
  const theme = useTheme();
  const {
    member,
    dispatch,
    state: { alert, modal },
  } = useSettingsContext();
  const [files, setFiles] = useState([]);

  // this should be set by PostImageList if there are no files
  // const [postDefaultImageURL, setPostDefaultImageURL] = useState('');
  var postImagesURLs = [];

  const titleRef = useRef('');
  const subtitleRef = useRef('');
  const mainRef = useRef('');
  const collectionName = 'posts';
  const storageName = 'posts';
  // const postDocumentId = member?.uid + '_' + uuidv4();
  const postDocumentId = postDoc.id;

  const uploadPostImages = () => {
    //FILE_NAME AND DATABASE DOCUMENT ID ARE THE SAME
    // ** THIS IS HOW WE ADD / DELETE SAME FILE / IMAGE AND DATABASE DOC REFERENCE **
    //create unique image and doc names by inserting uuid

    return new Promise(async (resolve, reject) => {
      // this array should contain all the URLs of the Post images
      let imageUploadPromises = [];
      const images = []; // our standard arry of objects [{src: url, alt: url,},.. ]

      try {
        var resizePromises = [];
        files.forEach((file, indx) => {
          resizePromises.push(resizeImage(file));
        });
        const resizeBlobs = await Promise.all(resizePromises);
        console.log('1', resizeBlobs);

        //upload Post images to storage

        files.forEach(async (file, indx) => {
          const imageName = postDocumentId + '_' + indx + '.' + file.name.split('.').pop();
          const storageFilePath = `${storageName}/${member.uid}/` + imageName;
          // const resizeFile = await resizeImage(file); // resize and compress the file
          imageUploadPromises.push(uploadFile(resizeBlobs[indx].blob, storageFilePath)); // upload the resized version
        });
        const urls = await Promise.all(imageUploadPromises);
        console.log('2 images uploaded');
        urls.map((url) => images.push({ src: url, alt: url }));
        console.log('3', images);

        resolve(images); // send back array of URLs of Post images in [{src: url, alt: url,},.. ]
      } catch (error) {
        console.log('4', error.message);
        reject(error);
      }
    });
  };

  // const setDefaultImageURL = (url) => {
  //   postImagesURLs = [url];
  // };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const subtitle = subtitleRef.current.value;
    // const main = mainRef.current.value;

    dispatch({ type: 'START_LOADING' });
    try {
      if (files.length < postDoc.data.images.length) {
        // there are files we need to delete - just delete the excess files as the rest will be overwritten by uploadPostImages
        for (var i = files.length; i < postDoc.data.images.length; i++) {
          const imageDeleteName = postDoc.data.images[i].src.split(postDoc.data.userId + '%2F')[1].split('?')[0]; // strip the filename from the URL
          // const ext = imageDeleteName.split('.')[1];
          const filePath = 'posts/' + postDoc.data.userId + '/' + imageDeleteName;
          deleteFile(filePath); // no need to await this.. let em go!
          console.log('deleted', filePath);
        }
      }
      if (files.length) {
        postImagesURLs = await uploadPostImages(); // returns an array of urls

        console.log('there are images: ', postImagesURLs);
      }
      // update database collection 'posts'
      const postDocumentObj = {
        userId: member?.uid || '',
        uName: member?.profileName || member?.displayName || '',
        uEmail: member?.email || member?.providerData[0]?.email || '',
        uAvatar: member?.photoURL || '',
        uMobile: member?.phoneNumber || '',
        albumName: collectionName,
        postType: '',
        title: title,
        timestamp: new Date().getTime(),
        subtitle: subtitle,
        // main: main.split(/\r?\n/).filter((para) => para !== ''), // array of paragraphs filtered for empty ones
        content: value,
        images: postImagesURLs, // array of images objects [{src: url, alt: url,},.. ]
        thumbnailUrl: '',
        tags: {},
        likes: 0,
      };
      const realtimePostObj = { id: postDocumentId, data: postDocumentObj };
      await updateDoco('posts', postDocumentId, postDocumentObj); // also adds timestamp automatically
      await updateRealtimeDoc(`Posts/${postDocumentId}`, realtimePostObj);
    } catch (error) {
      console.log(error.message);
    }

    dispatch({ type: 'END_LOADING' });
    dispatch({ type: 'MODAL', payload: { ...modal, open: false } });
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        ...alert,
        open: true,
        severity: 'success',
        message: 'Your post has been updated!',
        duration: 5000,
      },
    });
  };
  // console.log(files);

  const initMainText = () => {
    let str = '';
    postDoc.data.main.forEach((paragraph) => {
      str += paragraph + '\n\n';
    });
    return str;
  };
  function initMarkdownText() {
    let str = '';
    postDoc.data.main.forEach((paragraph) => {
      str += '<p>' + paragraph + '</p>';
    });
    return str;
  }

  return (
    <form onSubmit={handleSubmitPost}>
      <DialogContent sx={{ pt: 0, px: { xs: 1, sm: 1 }, width: { xs: '100vw', sm: 500, md: 600 }, minHeight: 440 }}>
        {/* <DialogContentText variant="caption">Click on photo to zoom. Add/delete photos & content.</DialogContentText> */}
        {/* <DialogContentText variant="caption"> Update when you are done!</DialogContentText> */}
        <DialogActions sx={{ my: 0, p: 0, justifyContent: 'center' }}>
          <Stack direction="row" spacing={2}>
            <AddImages files={files} setFiles={setFiles} />
            <Button type="submit" sx={{ borderRadius: 25 }} variant="contained" endIcon={<SendIcon />}>
              Update
            </Button>
            {/* <Button type='submit' size='small' sx={{ borderRadius: 25 }} variant='contained' endIcon={<SendIcon />}>
            Save
          </Button> */}
          </Stack>
        </DialogActions>
        <Paper elevation={15} sx={{ pt: 0, border: theme.palette.mode === 'dark' ? 0 : 1, borderColor: 'lightgray' }}>
          <EditPostImageList files={files} setFiles={setFiles} postDoc={postDoc} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={0} sx={{ width: '92%' }}>
              <TextField
                color="info"
                // sx={{ mb: 0 }}
                variant="standard"
                size="small"
                type="text"
                fullWidth
                inputRef={titleRef}
                label="Title"
                defaultValue={postDoc.data.title}
                required
                multiline
                InputProps={{ style: { fontSize: 18 } }}
              />
              <TextField
                color="info"
                sx={{ mb: 1 }}
                variant="standard"
                size="small"
                type="text"
                fullWidth
                inputRef={subtitleRef}
                defaultValue={postDoc.data.subtitle}
                label="Subtitle or Date"
                InputProps={{ style: { fontSize: 14 } }}
              />
              <Box id="quillwrap" className="quillwrap">
                <QuillNoSSR bounds="#quillwrap" theme="bubble" placeholder="Write something epic... select text to format!" modules={modules} value={value} onChange={handleEditorUpdates} />
              </Box>
              {/* <TextField
                color="info"
                sx={{ mb: 3 }}
                variant="standard"
                size="small"
                type="text"
                fullWidth
                inputRef={mainRef}
                label="Write something epic... select text to format!"
                defaultValue={initMainText()}
                required
                multiline
                InputProps={{ style: { fontSize: 14 } }}
              /> */}
            </Stack>
          </Box>
        </Paper>
        <DialogActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" sx={{ borderRadius: 25 }} variant="contained" endIcon={<SendIcon />}>
            Update
          </Button>
        </DialogActions>
      </DialogContent>
    </form>
  );
};
export default EditPost;
