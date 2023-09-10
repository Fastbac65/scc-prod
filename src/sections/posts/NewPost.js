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

const NewPost = () => {
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
  const mainRef = useRef('');
  const collectionName = 'Posts';
  const storageName = 'posts';
  const postDocumentId = member?.uid + '_' + uuidv4();
  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const defaultDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

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
          const imageName = postDocumentId + '_' + indx + '.' + file.name.split('.').pop(); // doc.id_indx.jpeg - last split gets the right file ext
          const storageFilePath = `${storageName}/${member.uid}/` + imageName;
          // const resizeFile = await resizeImage(file); // resize and compress the file
          imageUploadPromises.push(uploadFile(resizeBlobs[indx].blob, storageFilePath)); // upload the resized version
        });
        const urls = await Promise.all(imageUploadPromises); //  these urls have the '%2F' which doesnt work on firebase methods because of rules. Always have to build path with '/'
        console.log('2 images uploaded');
        urls.forEach((url) => {
          images.push({ src: url, alt: url });
        });
        console.log('3', images);

        resolve(images); // send back array of URLs of Post images in [{src: url, alt: url,},.. ]
      } catch (error) {
        console.log('4', error.message);
        reject(error);
      }
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const subtitle = subtitleRef.current.value;
    const main = mainRef.current.value;

    dispatch({ type: 'START_LOADING' });
    try {
      // upload post images if there are any
      if (files.length) {
        let urls = await uploadPostImages(); // returns an array of urls
        postImagesURLs = urls;

        console.log('there are images: ', urls);
      } else {
        // needs to be initialised to default lib image which is set by PostImageList
        postImagesURLs = [postDefaultImageURL];
        console.log('there are NO images: using lib', postDefaultImageURL);
      }
      // update database collection 'Posts'
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
        main: main.split(/\r?\n/).filter((para) => para !== ''), // array of paragraphs.
        images: postImagesURLs, // array of images objects [{src: url, alt: url,},.. ]
        thumbnailUrl: '',
        tags: {},
        likes: 0,
      };
      const realtimePostObj = { id: postDocumentId, data: postDocumentObj };
      await addDoco(collectionName, postDocumentId, postDocumentObj); // timestamp simplified
      await addRealtimeDoc(`${collectionName}/${postDocumentId}`, realtimePostObj); // timestamp simplified
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
  // console.log(files);

  return (
    <form onSubmit={handleSubmitPost}>
      <DialogContent sx={{ pt: 0, px: { xs: 0, sm: 1 }, width: { xs: 350, sm: 600, md: 600 }, minHeight: 440 }}>
        <DialogContentText variant="caption">Click on photo to zoom.</DialogContentText>
        <DialogContentText variant="caption">Add photos or go with the library option.</DialogContentText>
        <DialogActions sx={{ my: 0, justifyContent: 'center' }}>
          <Stack direction="row" spacing={2}>
            <AddImages files={files} setFiles={setFiles} />
            <Button type="submit" sx={{ borderRadius: 25 }} variant="contained" endIcon={<SendIcon />}>
              Post
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
                defaultValue={defaultDate}
                InputProps={{ style: { fontSize: 14 } }}
              />
              {/* <TextField size='small' type='text' fullWidth inputRef={summaryRef} label='Summary' required multiline /> */}
              <TextField color="info" sx={{ mb: 3 }} variant="standard" size="small" type="text" fullWidth inputRef={mainRef} label="Main" required multiline InputProps={{ style: { fontSize: 14 } }} />
            </Stack>
          </Box>
        </Paper>

        <DialogActions sx={{ justifyContent: 'space-around' }}>
          {/* <AddImages files={files} setFiles={setFiles} /> */}

          <Button type="submit" sx={{ borderRadius: 25 }} variant="contained" endIcon={<SendIcon />}>
            Post
          </Button>
        </DialogActions>
      </DialogContent>
    </form>
  );
};
export default NewPost;
