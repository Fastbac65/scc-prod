import { Box, Button, DialogActions, DialogContent, DialogContentText, Paper, Stack, TextField, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AddImages from './AddImages';
import PostImageList from './PostImageList';
import { uuidv4 } from '@firebase/util';
import uploadFile from 'src/lib/uploadFile';
import { addDoco } from 'src/lib/firestoreDocument';
import resizeImage from 'src/lib/resizeImage';
import { useSettingsContext } from 'src/components/settings';
import { addRealtimeDoc } from 'src/lib/firebaseRealtimeDatabase';

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
    ['bold', 'italic', 'link', 'underline', 'clean', { list: 'bullet' }],
    // ['link', { list: 'ordered' }, { list: 'bullet' }],
    // [{ list: 'ordered' }, { list: 'bullet' }],
    // [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    // ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const NewPost = () => {
  const [value, setValue] = useState();
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
  const [postDefaultImageURL, setPostDefaultImageURL] = useState('');
  var postImagesURLs = [];

  const titleRef = useRef('');
  const subtitleRef = useRef('');
  // const mainRef = useRef('');
  const collectionName = 'posts';
  const storageName = 'posts';
  const postDocumentId = member?.uid + '_' + uuidv4();
  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const defaultDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  const defaultAuthor = member?.profileName || member.displayName;

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

        //upload Post images to storage
        files.forEach(async (file, indx) => {
          const imageName = postDocumentId + '_' + indx + '.' + file.name.split('.').pop(); // doc.id_indx.jpeg - last split gets the right file ext
          const storageFilePath = `${storageName}/${member.uid}/` + imageName;
          // const resizeFile = await resizeImage(file); // resize and compress the file
          imageUploadPromises.push(uploadFile(resizeBlobs[indx].blob, storageFilePath)); // upload the resized version
        });
        const urls = await Promise.all(imageUploadPromises); //  these urls have the '%2F' which doesnt work on firebase methods because of rules. Always have to build path with '/'
        urls.forEach((url) => {
          images.push({ src: url, alt: url });
        });

        resolve(images); // send back array of URLs of Post images in [{src: url, alt: url,},.. ]
      } catch (error) {
        console.log('file error', error.message);
        reject(error);
      }
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const subtitle = subtitleRef.current.value;
    // const main = mainRef.current.value;

    dispatch({ type: 'START_LOADING' });
    try {
      // upload post images if there are any
      if (files.length) {
        let urls = await uploadPostImages(); // returns an array of urls
        postImagesURLs = urls;
      } else {
        // needs to be initialised to default lib image which is set by PostImageList
        postImagesURLs = [postDefaultImageURL];
      }
      // update database collection 'posts'
      const postDocumentObj = {
        userId: member?.uid || '',
        uName: member?.profileName || member?.displayName,
        uEmail: member?.email || member?.providerData[0]?.email || '',
        uAvatar: member?.photoURL || '',
        uMobile: member?.phoneNumber || '',
        albumName: collectionName,
        postType: member?.role || '',
        title: title,
        timestamp: new Date().getTime(),
        subtitle: subtitle,
        content: value,
        // main: main.split(/\r?\n/).filter((para) => para !== ''),
        // array of paragraphs.
        images: postImagesURLs, // array of images objects [{src: url, alt: url,},.. ]
        thumbnailUrl: '',
        tags: {},
        likes: 0,
      };
      const realtimePostObj = { id: postDocumentId, data: postDocumentObj };
      await addDoco('posts', postDocumentId, postDocumentObj); // timestamp simplified
      await addRealtimeDoc(`Posts/${postDocumentId}`, realtimePostObj); // timestamp simplified
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
        message: 'Your new post has been created succesfully!!',
        duration: 5000,
      },
    });
  };

  return (
    <form onSubmit={handleSubmitPost}>
      <DialogContent sx={{ pt: 0, px: { xs: 0, sm: 1 }, width: { xs: 350, sm: 600, md: 600 }, minHeight: 440 }}>
        {/* <DialogContentText variant="caption">Click on photo to zoom.</DialogContentText>
        <DialogContentText variant="caption">Add photos or go with the library option.</DialogContentText> */}
        <DialogActions sx={{ my: 0, justifyContent: 'center' }}>
          <Stack direction="row" spacing={2}>
            <AddImages files={files} setFiles={setFiles} />
            <Button type="submit" sx={{ borderRadius: 25 }} variant="contained" endIcon={<SendIcon />}>
              Send It..
            </Button>
            {/* <Button type='submit' size='small' sx={{ borderRadius: 25 }} variant='contained' endIcon={<SendIcon />}>
            Save
          </Button> */}
          </Stack>
        </DialogActions>
        <Paper elevation={15} sx={{ pt: 0, border: theme.palette.mode === 'dark' ? 0 : 1, borderColor: 'lightgray' }}>
          <PostImageList files={files} setFiles={setFiles} setPostDefaultImageURL={setPostDefaultImageURL} />
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
                required
                multiline
                InputProps={{ style: { fontSize: 20 } }}
              />
              <TextField
                color="info"
                sx={{ mb: 1 }}
                variant="standard"
                size="small"
                type="text"
                fullWidth
                inputRef={subtitleRef}
                label="Subtitle or Date"
                defaultValue={defaultAuthor + ', ' + defaultDate}
                InputProps={{ style: { fontSize: 14 } }}
              />
              <Box id="quillwrap" className="quillwrap">
                <QuillNoSSR bounds="#quillwrap" theme="bubble" placeholder="Write something epic... select text to format!" modules={modules} value={value} onChange={handleEditorUpdates} />
              </Box>
              {/* <TextField color="info" sx={{ mb: 3 }} variant="standard" size="small" type="text" fullWidth inputRef={mainRef} label="Main" required multiline InputProps={{ style: { fontSize: 14 } }} /> */}
            </Stack>
          </Box>
        </Paper>

        <DialogActions sx={{ justifyContent: 'flex-end' }}>
          {/* <AddImages files={files} setFiles={setFiles} /> */}

          <Button type="submit" sx={{ borderRadius: 25 }} variant="contained" endIcon={<SendIcon />}>
            Send it..
          </Button>
        </DialogActions>
      </DialogContent>
    </form>
  );
};
export default NewPost;
