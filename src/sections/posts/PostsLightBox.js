import { Fab, Tooltip, Box, useTheme, alpha } from '@mui/material';
import Lightbox from 'react-spring-lightbox';
import { useMemo, useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

const PostsLightBox = ({ open, setOpen, currentImageIndex, images }) => {
  const theme = useTheme();

  const [currentIndx, setCurrentIndx] = useState(0);

  // runs upfront as opposed to useEffect which runs after component renders which is too late to set Indx
  useMemo(() => {
    setCurrentIndx(currentImageIndex);
  }, [currentImageIndex, open]);

  const gotoPrevious = () => {
    currentIndx > 0 && setCurrentIndx(currentIndx - 1);
  };
  const gotoNext = () => {
    currentIndx + 1 < images.length && setCurrentIndx(currentIndx + 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Lightbox
      isOpen={open}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentIndx}
      /* Add your own UI */
      renderHeader={() => <CloseLightBox handleClose={handleClose} />}
      // renderFooter={() => <CloseLightBox />}
      renderPrevButton={() => <Prev gotoPrevious={gotoPrevious} currentIndx={currentIndx} />}
      renderNextButton={() => <Next gotoNext={gotoNext} currentIndx={currentIndx} images={images} />}
      // renderImageOverlay={() => <CloseLightBox />}
      /* Add styling */
      // className="cool-class"
      // style={{ background: "grey" }}
      style={{ zIndex: theme.zIndex.modal + 1, background: 'rgb(0,0,0,.8)' }}
      //sx={{ zIndex: (theme) => theme.zIndex.modal + 1}}

      /* Handle closing */
      onClose={handleClose}
      /* Use single or double click to zoom */
      singleClickToZoom
      /* react-spring config for open/close animation */
      pageTransitionConfig={{
        from: { transform: 'scale(0.3)', opacity: 0.5 },
        enter: { transform: 'scale(1)', opacity: 1 },
        leave: { transform: 'scale(0.3)', opacity: 0 },
        config: { mass: 1, tension: 320, friction: 32 },
      }}
    />
  );
};
export default PostsLightBox;

const CloseLightBox = ({ handleClose }) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
      <Tooltip enterDelay={2000} title="Close" placement="right">
        <Fab
          size="small"
          color="primary"
          onClick={handleClose}
          sx={{
            background: alpha('#f9de00', 0.4),
            boxShadow: 'none',
            zIndex: theme.zIndex.modal + 2,
            '&:hover': {
              color: '#f9de00',
              background: 'none',
            },
          }}
        >
          <Iconify icon="ic:round-arrow-back" />
          {/* <ArrowBackIcon fontSize="medium" /> */}
        </Fab>
      </Tooltip>
    </Box>
  );
};

const Next = ({ gotoNext, currentIndx, images }) => {
  const theme = useTheme();
  return (
    <Fab
      color="primary"
      onClick={gotoNext}
      sx={{
        display: currentIndx === images.length - 1 ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        boxShadow: 'none',
        position: 'absoulte',
        right: 20,
        zIndex: theme.zIndex.modal + 2,
        '&:hover': {
          // color: ${({ theme }) => theme.pageContentLinkHoverColor};
          color: '#f9de00',
          background: 'none',
        },
      }}
    >
      <Iconify icon="ic:round-arrow-forward-ios" />

      {/* <ArrowForwardIosRoundedIcon fontSize="medium" /> */}
    </Fab>
  );
};

const Prev = ({ gotoPrevious, currentIndx }) => {
  const theme = useTheme();
  return (
    <Fab
      color="primary"
      onClick={gotoPrevious}
      sx={{
        // border: 1,
        // borderColor: 'red',
        display: currentIndx === 0 ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        boxShadow: 'none',
        position: 'absoulte',
        left: 20,
        zIndex: theme.zIndex.modal + 2,
        '&:hover': {
          // color: ${({ theme }) => theme.pageContentLinkHoverColor};
          color: '#f9de00',
          background: 'none',
        },
      }}
    >
      <Iconify icon="ic:round-arrow-back-ios" />
      {/* <ArrowBackIosRoundedIcon fontSize="medium" /> */}
    </Fab>
  );
};
