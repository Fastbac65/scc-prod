import { useState } from 'react';
import { Menu, IconButton, Box, Tooltip, ListItemIcon, ListItemText, Stack, ListItemButton, alpha, useTheme } from '@mui/material';

import EditPost from './EditPost';
import deletePost from 'src/lib/deletePost';
import { useSettingsContext } from 'src/components/settings';
import Iconify from 'src/components/iconify/Iconify';

function PostOptions({ postDoc }) {
  const theme = useTheme();
  const {
    user,
    state: { alert, modal },
    dispatch,
  } = useSettingsContext();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDelete = async () => {
    //delete
    setAnchorElUser(null); // close the menu after clicking
    dispatch({ type: 'START_LOADING' });

    try {
      await deletePost(postDoc);
      dispatch({
        type: 'UPDATE_ALERT',
        payload: { ...alert, open: true, severity: 'success', message: 'Post deleted', duration: 6000 },
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_ALERT',
        payload: { ...alert, open: true, severity: 'error', message: error.message, duration: 6000 },
      });
    }
    dispatch({ type: 'END_LOADING' });
  };

  const handleEdit = async () => {
    setAnchorElUser(null); // close the menu after clicking

    dispatch({
      type: 'MODAL',
      payload: { ...modal, open: true, content: <EditPost postDoc={postDoc} />, title: 'Edit Post' },
    });
  };

  return (
    <Box>
      <Tooltip title="Options" arrow placement="top-end">
        <IconButton
          onClick={handleOpenUserMenu}
          aria-label="Options Menu"
          sx={{
            display: postDoc.data.userId === user?.uid ? 'in-line' : 'none',
          }}
        >
          <Iconify icon="material-symbols:more-vert" />
        </IconButton>
      </Tooltip>
      <Menu
        // sx={{ mt: '25px' }}
        MenuListProps={{ disablePadding: true }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Stack
          sx={{
            // flexShrink: 0,
            borderRadius: 1,
            width: 1,
            bgcolor: alpha(theme.palette.primary.main, 0.25),
            py: 0,
          }}
        >
          <Stack sx={{ my: 1, px: 2 }}>
            <ListItemButton onClick={handleEdit} sx={{ px: 1, height: 44, borderRadius: 1 }}>
              <ListItemIcon>
                <Iconify icon="mdi:edit" />
              </ListItemIcon>
              <ListItemText
                primary="Edit Post"
                primaryTypographyProps={{
                  typography: 'body1',
                }}
              />
            </ListItemButton>
            <ListItemButton onClick={handleDelete} sx={{ px: 1, height: 44, borderRadius: 1 }}>
              <ListItemIcon>
                <Iconify icon="mdi:delete" />
              </ListItemIcon>
              <ListItemText
                primary="Delete Post"
                primaryTypographyProps={{
                  typography: 'body1',
                }}
              />
            </ListItemButton>
          </Stack>
        </Stack>
      </Menu>
    </Box>
  );
}
export default PostOptions;
