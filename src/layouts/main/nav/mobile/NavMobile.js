import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { IconButton, Menu } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// components
import Iconify from 'src/components/iconify/Iconify';
//
import AppMenuContent from '../../AppMenuContent';

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const { pathname } = useRouter();
  // const theme = useTheme();
  const [anchorElMobMenu, setAnchorElMobMenu] = useState();

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = (event) => {
    setAnchorElMobMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElMobMenu(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Menu
        MenuListProps={{ disablePadding: true }}
        anchorEl={anchorElMobMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={!!anchorElMobMenu}
        onClick={handleClose}
      >
        <AppMenuContent data={data} />
      </Menu>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
