import { memo, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Avatar, Tooltip, Typography, IconButton, ImageList, ImageListItem, Checkbox, Popover, Link, MenuItem } from '@mui/material';
import PostOptions from './PostOptions';
import Iconify from 'src/components/iconify/Iconify';
import { useSettingsContext } from 'src/components/settings';
// import updateUserRecords from '../context/updateUserRecords';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function PostExpandCard({ user, doc, setOpen, setCurrentImageIndex, setImages, maxWidth = 380 }) {
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState('');
  const [openShare, setOpenShare] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [author, setAuthor] = useState(null);
  const theme = useTheme();
  const { members } = useSettingsContext();
  const socials = [
    {
      value: 'facebook',
      label: 'FaceBook',
      icon: 'carbon:logo-facebook',
      color: '#1877F2',
      href: 'https://facebook.com',
    },
    {
      value: 'instagram',
      label: 'Instagram',
      icon: 'carbon:logo-instagram',
      color: '#E02D69',
      href: 'https://facebook.com',
    },
    {
      value: 'linkedin',
      label: 'Linkedin',
      icon: 'carbon:logo-linkedin',
      color: '#007EBB',
      href: 'https://facebook.com',
    },
    {
      value: 'twitter',
      label: 'Twitter',
      icon: 'carbon:logo-twitter',
      color: '#00AAEC',
      href: 'https://facebook.com',
    },
  ];

  useEffect(() => {
    if (!members) return;
    setAuthor({ ...members.filter((mem) => mem.uid === doc.data.userId)[0] });
    //   //
    //   // if (user) {
    //   //   let like = user?.uPostLikes?.indexOf(doc.id) >= 0 ? 'red' : '';
    //   //   setLike(like);
    //   //   // console.log('setLikes initialised');
    //   // }
  }, [members, doc.data.userId]);

  const handleOpen = (event) => {
    setOpenShare(event.currentTarget);
  };
  const handleClose = () => {
    setOpenShare(null);
  };
  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    if (like === 'red') {
      setLike('');
      // let newLikes = { uPostLikes: [...user.uPostLikes] };
      // newLikes.uPostLikes.splice(newLikes.uPostLikes.indexOf(doc.id), 1);
      // console.log(newLikes);
      // Object.assign(user, newLikes); // updates the currentUser object in memory
      // updateUserRecords('Users', user.uid, newLikes)
      //   .then((result) => console.log('User post likes updated', result))
      //   .catch((error) => console.log('Error updating user roles', error));
    } else {
      setLike('red');
      // let newLikes = {};
      // if (user?.uPostLikes?.length > 0) {
      //   newLikes = { uPostLikes: [doc.id, ...user?.uPostLikes] };
      //   let userUpdateObj = Object.assign(user, newLikes);

      //   console.log(newLikes);
      // } else {
      //   newLikes = { uPostLikes: [doc.id] };
      //   console.log(newLikes);
      //   let userUpdateObj = Object.assign(user, newLikes);
      //   console.log(userUpdateObj);

      //   // setCurrentUser(authUser);
      //   // setCurrentUser(user);
      // }
      // updateUserRecords('Users', user.uid, newLikes)
      //   .then((result) => console.log('User post likes updated', result))
      //   .catch((error) => console.log('Error updated user roles', error));

      console.log(user);
    }
  };

  const handleShare = () => {
    const postlink = '/posts/' + doc.id;
    console.log('share post TODO');
    // navigate(postlink);
  };

  return (
    <>
      {/* <Fade timeout={500} in={true}> */}
      <Card sx={{ maxWidth: maxWidth }}>
        <div style={{ position: 'relative' }}>
          <div id={doc.id} style={{ position: 'absolute', top: '-80px' }}></div>
        </div>
        <CardHeader
          avatar={
            <Tooltip enterTouchDelay={100} placement="top" title={author?.data?.profileName || author?.data?.displayName || doc.data?.uName}>
              <Avatar src={author?.data?.photoURL || doc.data?.uAvatar} alt={doc.data?.uName} aria-label={doc.data?.uName} />
            </Tooltip>
          }
          action={<PostOptions postDoc={doc} />}
          title={doc.data?.title}
          subheader={doc.data?.subtitle}
        />
        <ImageList
          gap={1}
          sx={{ mt: 1, width: 'auto', height: 'auto', maxHeight: 301, maxWidth: 400, zIndex: 100 }} // height 301 allows for 1px gap so no scroll bars show up
          rowHeight={150}
          // cols={layout[files.length - 1]}
          cols={doc.data.images.length === 1 ? 1 : 2}
        >
          {doc.data.images.map((image, indx) => (
            <ImageListItem key={image.src}>
              <CardMedia
                component="img"
                height="150"
                src={image.src}
                alt={image.alt}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setCurrentImageIndex(indx);
                  setImages(doc.data?.images);
                  setOpen(true);
                }}
              />
              {indx === 0 && (
                <Typography
                  variant="caption"
                  component="span"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    color: 'white',
                    bgcolor: 'rgba(0,0,0,0.3)',
                    p: '3px',
                    borderBottomRightRadius: 10,
                  }}
                >
                  TODO date
                  {/* {moment(doc?.data?.timestamp?.toDate()).fromNow()} */}
                </Typography>
              )}
              {indx === 1 && doc.data.images.length > 4 && (
                <Typography
                  variant="caption"
                  component="span"
                  sx={{
                    position: 'absolute',
                    right: 0,
                    Top: 0,
                    color: 'white',
                    bgcolor: 'rgba(0,0,0,0.3)',
                    p: '3px',
                    borderBottomLeftRadius: 10,
                  }}
                >
                  {`+${doc.data.images.length - 4} photos`}
                </Typography>
              )}
            </ImageListItem>
          ))}
        </ImageList>

        <CardContent>
          <Typography variant="body2" color="text.primary">
            {doc.data?.main[0]}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ py: 0 }}>
          {user && (
            <>
              <Checkbox
                color="error"
                aria-label="add to favorites"
                checked={favorite}
                onChange={handleChangeFavorite}
                icon={<Iconify icon="carbon:favorite" />}
                checkedIcon={<Iconify icon="carbon:favorite-filled" />}
              />
              <IconButton aria-label="share post" onClick={handleOpen} color={open ? 'primary' : 'default'}>
                <Iconify icon="carbon:share" />
              </IconButton>
              {/* <IconButton onClick={handleLikeClick} aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: like }} />
                </IconButton> */}

              {/* <IconButton aria-label="share post" onClick={handleShare}>
                  <ShareIcon />
                </IconButton> */}
            </>
          )}
          {doc.data.main.length > 1 && (
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              {/* <ExpandMoreIcon /> */}
              <Iconify icon="mdi:chevron-down" />
            </ExpandMore>
          )}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ py: 0 }}>
            {doc.data.main.map(
              (
                paragraf,
                indx // being explicit not to confuse with Typography paragraph prop
              ) => (
                <Typography key={indx} variant="body2" paragraph color="text.secondary">
                  {
                    indx !== 0 && paragraf // skip first paragraf as its alreay above
                  }
                </Typography>
              )
            )}
          </CardContent>
          <CardActions disableSpacing sx={{ py: 0 }}>
            {user && (
              <>
                <Checkbox
                  color="error"
                  aria-label="add to favorites"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
                <IconButton aria-label="share post" onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>
                {/* <IconButton onClick={handleLikeClick} aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: like }} />
                </IconButton> */}

                {/* <IconButton aria-label="share post" onClick={handleShare}>
                  <ShareIcon />
                </IconButton> */}
              </>
            )}

            <ExpandMore href={`#${doc.id}`} expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <Iconify icon="mdi:chevron-down" />
              {/* <ExpandMoreIcon /> */}
            </ExpandMore>
          </CardActions>
        </Collapse>
      </Card>
      {/* </Fade> */}
      <Popover
        open={!!openShare} /* open is e.currenttarget so force it to boolean */
        onClose={handleClose}
        anchorEl={openShare}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { width: 200, p: 1 },
        }}
      >
        {socials.map((social) => (
          <Link key={social.value} href={social.href} target="_blank" underline="none">
            <MenuItem onClick={handleClose} sx={{ typography: 'body2', color: theme.palette.primary.main }}>
              <Iconify icon={social.icon} width={24} sx={{ mr: 1 }} />
              Share via {social.label}
            </MenuItem>
          </Link>
        ))}
      </Popover>
    </>
  );
}
export default memo(PostExpandCard);
