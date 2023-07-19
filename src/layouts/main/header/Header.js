import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Link,
  Stack,
  // Button,
  AppBar,
  Toolbar,
  // Container,
  Tooltip,
  IconButton,
  Avatar,
} from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';
import { useSettingsContext } from 'src/components/settings/SettingsContext';

// config
import { HEADER } from 'src/config-global';

import Image from 'src/components/image/Image';
import Iconify from 'src/components/iconify/Iconify';

import { bgBlur } from 'src/utils/cssStyles';
import { useState } from 'react';
import { NavMobile, NavDesktop, navConfig } from '../nav';
import AccountMenu from '../AccountMenu';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();
  const { onToggleMode, user, loading, member } = useSettingsContext();
  const [anchorElUser, setAnchorElUser] = useState();

  const isMdUp = useResponsive('up', 'md');
  const isSmUp = useResponsive('up', 'sm');

  const isOffset = useOffSetTop(2);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleUserClick = () => {
  //   //
  // }

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none', width: '100vw' }}>
      <Toolbar
        disableGutters
        sx={{
          display: 'block',
          height: {
            xs: HEADER.H_MOBILE,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: 800,
            // duration: theme.transitions.duration.shorter,
          }),

          ...(isOffset && {
            ...{ backgroundColor: theme.palette.primary.main },
            // ...bgBlur({ color: theme.palette.primary.darker, blur: 6 }),
            // ...bgBlur({ color: theme.palette.background.default, blur: 5 }),
            // color: 'text.primary',
            color: 'common.white',
            // height: {
            //   md: HEADER.H_MAIN_DESKTOP,
            // },
          }),
          ...(!isOffset && {
            // ...{ backgroundColor: theme.palette.primary.dark },
            ...bgBlur({ color: theme.palette.primary.darker, blur: 7, opacity: 0.1 }),
            // ...bgBlur({ color: theme.palette.background.default, blur: 5 }),
            // color: 'text.primary',
            // height: {
            //   md: HEADER.H_MAIN_DESKTOP,
            // },
          }),
        }}
      >
        <Box sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* logo image left on MdUp */}
          {isMdUp && (
            <Link href="/" component={NextLink}>
              <Tooltip arrow placement="bottom" title="home" enterDelay={1000}>
                <Box
                  sx={{
                    ml: '5px',
                    lineHeight: 0,
                    position: 'relative',
                    height: isOffset ? '64px' : '54px',
                    width: '170px',
                    borderRadius: isOffset ? 0 : 1,
                    overflow: 'hidden',
                    transition: theme.transitions.create(['height'], {
                      easing: theme.transitions.easing.easeInOut,
                      duration: 500,
                      // duration: theme.transitions.duration.shorter,
                    }),
                  }}
                >
                  <Image src="/assets/images/scc-logo-blue-sm2.png" alt="SCC logo" disabledEffect sx={{ height: 1 }} />
                </Box>
              </Tooltip>
            </Link>
          )}
          {/* mobile nav below MdUp */}
          {!isMdUp && <NavMobile data={navConfig} />}
          {/* image center on MdUp */}
          {!isMdUp && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Link href="/" component={NextLink}>
                <Tooltip arrow placement="bottom" title="home" enterDelay={1000}>
                  <Box
                    sx={{
                      lineHeight: 0,
                      position: 'relative',
                      height: isOffset ? '64px' : '54px',
                      width: '170px',
                      borderRadius: isOffset ? 0 : 1,
                      overflow: 'hidden',
                      transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: 500,
                        // duration: theme.transitions.duration.shorter,
                      }),
                    }}
                  >
                    <Image src="/assets/images/scc-logo-blue-sm2.png" alt="South Curl Curl SLSC logo" disabledEffect sx={{ height: 1 }} />
                  </Box>
                </Tooltip>
              </Link>
            </Box>
          )}
          {/* desktop nav on MdUp */}
          {isMdUp && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <NavDesktop data={navConfig} user={user} />
            </Box>
          )}
          {/* set minWidth on stack to placehold space for Avatar - stops logo/menu moving around while loading */}
          <Stack spacing={0} direction="row" alignItems="center" justifyContent="flex-end" sx={{ minWidth: { xs: 56, sm: 64, md: 72 }, pr: { xs: 0, sm: 1, md: 2 } }}>
            {user && !loading && (
              <IconButton onClick={handleOpenUserMenu} color="inherit">
                <Avatar src={user.photoURL || member.photoURL} sx={{ width: 40, height: 40 }} />
              </IconButton>
            )}

            {/* <Stack spacing={1} direction="row" alignItems="center" sx={{ pr: { xs: 0, md: 2 } }}> */}
            {!user && !loading && (
              <>
                {isSmUp && (
                  <Tooltip title={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'} arrow placement="bottom-end">
                    <IconButton onClick={onToggleMode} sx={{ color: theme.palette.mode === 'dark' ? '#f9de00' : 'inherit' }}>
                      {theme.palette.mode === 'dark' ? <Iconify icon="mdi:brightness-7" /> : <Iconify icon="mdi:brightness-2" />}
                    </IconButton>
                  </Tooltip>
                )}
                <Tooltip title="Sign in" arrow placement="bottom">
                  <Link component={NextLink} href="/auth/login-cover" underline="none" color="inherit">
                    <IconButton color="inherit" aria-label="search">
                      <Iconify icon="mdi:login" />
                    </IconButton>
                  </Link>
                </Tooltip>
              </>
            )}

            {/* <Badge badgeContent={2} color="info">
                <IconButton component={NextLink} href={paths.eCommerce.wishlist} size="small" color="inherit" sx={{ p: 0 }}>
                  <Iconify icon="carbon:favorite" width={24} />
                </IconButton>
              </Badge> */}

            {/* </Stack> */}
          </Stack>
          <AccountMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
