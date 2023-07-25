import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Box, CardMedia, IconButton, ImageList, ImageListItem, Tooltip } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import PostsLightBox from './PostsLightBox';

// defines how we layout different numbers of images. Each entry is column count
// const layout = [1, 2, 3, 4, 5, 6];
// const height = [120, 120, 120, 120, 120, 120];
// const height = [120, 120, 120, 75, 75, 75];
const imglib = [
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader8.jpeg?alt=media&token=77427584-3a3c-4d53-9b20-a40235cf7996',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2FBattleOfTheDitch-1-1-1024x598.jpeg?alt=media&token=4b70337f-70b1-4ec7-bdc5-b61f3b4b0801',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader7.jpeg?alt=media&token=a0efaf8b-6c32-45a5-b652-b35234b3e14e',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader5.jpeg?alt=media&token=a24ea980-dc44-4618-ab89-04b61b827c2b',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader4.jpeg?alt=media&token=e86582d8-a725-4e8b-80b3-c01920f9c698',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader3.jpeg?alt=media&token=163ff5b1-e261-438d-ade3-fbb3b144f965',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fheader2.jpeg?alt=media&token=7d4c1d81-0de5-4e3d-b82b-37e1040aee00',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fscc-beach-sunrise.jpeg?alt=media&token=2ceeadd7-4665-4499-9146-26cca26e0288',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2FAussies-317-1024x602.jpeg?alt=media&token=f4a74c4e-18df-4f87-8ea9-4973ccf1ba35',
  'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2FAustralia-Day-7-1024x683.jpeg?alt=media&token=231211b8-93a1-41d1-a533-d395ee0926b4',
];

const PostImageList = ({ files, setFiles, setPostDefaultImageURL }) => {
  const [images, setImages] = useState([]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // picks an initial photo from the library
  useMemo(() => {
    const indx = Math.floor(Math.random() * imglib.length);
    let url = imglib[indx];
    setImages([{ src: url, alt: url }]);
  }, []);

  // sets up images array from files - basically does nothing until there are files
  useEffect(() => {
    // create the array of images[{src: url , alt: url ,},...]

    var imgs = [];
    if (files.length) {
      console.log('if files was true');
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
    console.log('delete image', image, indx, e);
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
    <div>
      {images.length !== 0 && (
        <ImageList
          gap={1}
          sx={{ mt: 0, width: '100%', height: 'auto', maxHeight: 150, maxWidth: 350 }}
          rowHeight={150}
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
                    height={150}
                    src={image.src}
                    alt={image?.alt}
                    loading="lazy"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCurrentImageIndex(indx);
                      setOpen(true);
                      console.log('clicked image');
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
    </div>
  );
};
export default PostImageList;
