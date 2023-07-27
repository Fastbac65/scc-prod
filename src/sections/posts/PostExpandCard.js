import { memo, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Tooltip, Typography, IconButton, ImageList, ImageListItem, Checkbox, Popover, Link, MenuItem, Fade } from '@mui/material';
import PostOptions from './PostOptions';
import Iconify from 'src/components/iconify/Iconify';
import { useSettingsContext } from 'src/components/settings';
import { updateDoco } from 'src/lib/firestoreDocument';
import { fToNow } from 'src/lib/formatTime';
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

function PostExpandCard({ user, doc, setOpen, setCurrentImageIndex, setImages, maxWidth = 600 }) {
  const [expanded, setExpanded] = useState(false);
  const [openShare, setOpenShare] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [author, setAuthor] = useState(null);
  const theme = useTheme();
  const { member, members } = useSettingsContext();
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

    const fav = member?.postLikes?.indexOf(doc.id) >= 0 ? true : false;
    setFavorite(fav);
  }, [member, members, doc]);

  const handleOpen = (event) => {
    setOpenShare(event.currentTarget);
  };
  const handleClose = () => {
    setOpenShare(null);
  };
  const handleChangeFavorite = async (event) => {
    setFavorite(event.target.checked);
    if (favorite) {
      const newLikes = { postLikes: [...member?.postLikes] };
      newLikes.postLikes.splice(newLikes.postLikes.indexOf(doc.id), 1);
      await updateDoco('members', user.uid, newLikes);
    } else {
      let newLikes;
      if (member?.postLikes?.length > 0) {
        newLikes = { postLikes: [doc.id, ...member?.postLikes] };
      } else {
        newLikes = { postLikes: [doc.id] };
      }
      await updateDoco('members', user.uid, newLikes);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleShare = () => {
  //   const postlink = '/posts/' + doc.id;
  //   console.log('share post TODO');
  //   // navigate(postlink);
  // };
  // more pics is different for odd number of pics as we use full width so no gaps
  const morePics = doc.data.images.length % 2 === 0 ? doc.data.images.length - 4 : doc.data.images.length - 2;

  return (
    <>
      <Fade timeout={250} in={true}>
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
            subheader={(author?.data?.profileName || author?.data?.displayName || doc.data?.uName) + ', ' + doc.data?.subtitle}
          />
          <ImageList
            gap={1}
            sx={{ mt: 1, width: 'auto', height: 'auto', maxHeight: 301, zIndex: 100 }} // height 301 allows for 1px gap so no scroll bars show up
            rowHeight={150}
            // cols={layout[files.length - 1]}
            cols={doc.data.images.length % 2 !== 0 ? 1 : 2}
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
                      bgcolor: 'rgba(0,0,0,0.5)',
                      p: '3px',
                      borderBottomRightRadius: 10,
                    }}
                  >
                    {fToNow(doc.data?.timestamp?.seconds * 1000)}
                  </Typography>
                )}
                {indx === 1 && doc.data.images.length === 3 && (
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      position: 'absolute',
                      right: 0,
                      Top: 0,
                      color: 'white',
                      bgcolor: 'rgba(0,0,0,0.5)',
                      p: '3px',
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    {`+1 photo`}
                  </Typography>
                )}
                {(indx === 1 || indx === doc.data.images.length - 1) && doc.data.images.length > 4 && (
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      position: 'absolute',
                      right: 0,
                      Top: 0,
                      color: 'white',
                      bgcolor: 'rgba(0,0,0,0.5)',
                      p: '3px',
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    {`+${morePics} photos`}
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
                <IconButton aria-label="share post" onClick={handleOpen}>
                  <Iconify icon="carbon:share" color={open ? theme.palette.primary.light : 'default'} />
                </IconButton>
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
                  <IconButton aria-label="share post" onClick={handleOpen}>
                    <Iconify icon="carbon:share" color={open ? theme.palette.primary.light : 'default'} />
                  </IconButton>
                </>
              )}

              <ExpandMore href={`#${doc.id}`} expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <Iconify icon="mdi:chevron-down" />
                {/* <ExpandMoreIcon /> */}
              </ExpandMore>
            </CardActions>
          </Collapse>
        </Card>
      </Fade>
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
            <MenuItem onClick={handleClose} sx={{ typography: 'body2', color: theme.palette.primary.light }}>
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
