import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Box, CardMedia, IconButton, ImageList, ImageListItem, Stack, Tooltip } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import PostsLightBox from './PostsLightBox';

const imgObjs = [
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fgusto4.jpeg?alt=media&token=714e02a1-4880-4f3c-bb11-60d4975a1414',
    label: 'gusto4',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2FAustralia-Day-7-1024x683.jpeg?alt=media&token=231211b8-93a1-41d1-a533-d395ee0926b4',
    label: 'Australia-Day-7-1024x683',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2FAussies-317-1024x602.jpeg?alt=media&token=f4a74c4e-18df-4f87-8ea9-4973ccf1ba35',
    label: 'Aussies-317-1024x602',
  },

  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2FBattleOfTheDitch-1-1-1024x598.jpeg?alt=media&token=4b70337f-70b1-4ec7-bdc5-b61f3b4b0801',
    label: 'BattleOfTheDitch-1-1-1024x598',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fboaties1.jpeg?alt=media&token=3e779f83-8335-454a-b782-a2588306c23d',
    label: 'boaties1',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fgusto1.jpeg?alt=media&token=e0e8e5ae-c425-4a3f-bf35-8f4ed811abaa',
    label: 'gusto1',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fboaties2.jpeg?alt=media&token=576fb407-4cc7-4ec4-9d75-f5bd37b95f4c',
    label: 'boaties2',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fboaties4.jpeg?alt=media&token=8f587bd1-ce42-4764-ba33-051873614d6f',
    label: 'boaties4',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader3.jpeg?alt=media&token=163ff5b1-e261-438d-ade3-fbb3b144f965',
    label: 'header3',
  },

  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fgusto5.jpeg?alt=media&token=4b002207-5358-450a-8dbc-798c929d05cf',
    label: 'gusto5',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader5.jpeg?alt=media&token=a24ea980-dc44-4618-ab89-04b61b827c2b',
    label: 'header5',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fgusto2.jpeg?alt=media&token=b8af4d5b-1093-4d23-8ffc-5ea03df0240e',
    label: 'gusto2',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fscc-beach-sunrise.jpeg?alt=media&token=2ceeadd7-4665-4499-9146-26cca26e0288',
    label: 'scc-beach-sunrise',
  },
  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fpatrol4.jpeg?alt=media&token=53966b2e-a891-46fb-9697-6c3e3f108031',
    label: 'patrol4',
  },

  {
    link: 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader8.jpeg?alt=media&token=77427584-3a3c-4d53-9b20-a40235cf7996',
    label: 'header8',
  },
];

const PostImageList = ({ files, setFiles, setPostDefaultImageURL }) => {
  const [images, setImages] = useState([]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // picks an initial photo from the library
  useMemo(() => {
    const indx = Math.floor(Math.random() * imgObjs.length);
    let url = imgObjs[indx].link;
    setImages([{ src: url, alt: url }]);
  }, []);

  useEffect(() => {}, []);

  // sets up images array from files - basically does nothing until there are files
  useEffect(() => {
    // create the array of images[{src: url , alt: url ,},...]

    var imgs = [];
    if (files.length) {
      files.forEach((file, indx) => {
        var url = URL.createObjectURL(file);
        // imgs.push({ src: url, alt: url });  another way to do it
        imgs = [...imgs, { src: url, alt: url }];
      });
      setImages(imgs);
    }
    if (!files.length) {
      setPostDefaultImageURL(...images);

      // may need to reload a default image if all files are deleted in the UI
    }
  }, [files]);

  const handleDelete = (e, indx, image) => {
    // need to delete a file from 'files' and the image from the display
    let imgArr = [...images];
    imgArr.splice(indx, 1);
    setImages(imgArr);
    // setImages(images.filter((eachImage) => eachImage.src !== image.src));
    let fileArr = [...files];
    fileArr.splice(indx, 1);
    setFiles(fileArr);
    // setFiles(files.filter((file) => file.name !== files[indx].name));
  };

  return (
    <Stack direction="row" justifyContent="center">
      {images.length !== 0 && (
        <ImageList
          gap={1}
          sx={{ mt: 0, width: '100%', height: 'auto', maxHeight: images.length === 1 ? 400 : 200 }}
          rowHeight={images.length === 1 ? 400 : 200}
          // cols={layout[files.length - 1]}
          cols={images.length}
        >
          {images.map(
            (image, indx) =>
              image && (
                <ImageListItem key={indx}>
                  <CardMedia
                    component="img"
                    // height={height[files.length - 1]}
                    height={images.length === 1 ? 400 : 200}
                    src={image.src}
                    alt={image?.alt}
                    loading="lazy"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCurrentImageIndex(indx);
                      setOpen(true);
                    }}
                  />
                  {images.length > 1 && (
                    <Box
                      component="span"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        color: 'white',
                        bgcolor: 'rgba(0,0,0,0.3)',
                        borderBottomRightRadius: 10,
                      }}
                    >
                      <Tooltip arrow placement="top-start" title="delete" enterDelay={3000}>
                        <IconButton
                          onClick={(e) => {
                            handleDelete(e, indx, image);
                          }}
                          sx={{
                            color: 'white',
                            p: '3px',
                          }}
                        >
                          <DeleteForeverOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                </ImageListItem>
              )
          )}
          <PostsLightBox open={open} setOpen={setOpen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} images={images} />
        </ImageList>
      )}
    </Stack>
  );
};
export default PostImageList;
