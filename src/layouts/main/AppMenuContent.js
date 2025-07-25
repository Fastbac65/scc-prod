import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import { Link, Stack, Divider, ListItemIcon, ListItemText, ListItemButton, useTheme } from '@mui/material';
// hooks
import useActiveLink from 'src/hooks/useActiveLink';

// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
// import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function AppMenuContent({ data }) {
  const { themeMode, onToggleMode, user } = useSettingsContext();
  const theme = useTheme();
  // const router = useRouter();

  return (
    <Stack
      sx={{
        flexShrink: 0,
        borderRadius: 1,
        width: 1,
        bgcolor: alpha(theme.palette.primary.main, 0.25),
        py: 0,
      }}
    >
      <Stack sx={{ my: 1, px: 2 }}>
        {data.map((item) => (
          <MenuItem key={item.title} item={item} user={user} />
        ))}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 2 }}>
        <ListItemButton onClick={onToggleMode} sx={{ px: 1, borderRadius: 1 }}>
          <ListItemIcon>{themeMode === 'dark' ? <Iconify icon="mdi:brightness-7" color="#f9de00" /> : <Iconify icon="mdi:brightness-2" />}</ListItemIcon>
          <ListItemText
            primary={themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            primaryTypographyProps={{
              typography: 'body2',
            }}
          />
        </ListItemButton>
        <Link color={themeMode === 'dark' ? '#fff' : '#000'} target="_blank" href="https://hub.sls.com.au/public/pay/338" rel="noopener">
          <ListItemButton sx={{ px: 1, borderRadius: 1 }}>
            <ListItemIcon>
              <Iconify icon="mdi:currency-usd" />
            </ListItemIcon>
            <ListItemText
              primary="Payments"
              primaryTypographyProps={{
                typography: 'body2',
              }}
            />
          </ListItemButton>
        </Link>
      </Stack>
    </Stack>
  );
}
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

function MenuItem({ item, user }) {
  const { active } = useActiveLink(item.path);

  return (
    <Link component={NextLink} key={item.title} href={item.path} color={active ? 'primary.light' : 'inherit'} underline="none">
      <ListItemButton
        sx={{
          px: 1,
          height: 44,
          borderRadius: 1,
          display: item.access === 'public' ? 'flex' : user ? 'flex' : 'none',
          // color: 'text.primary',
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            typography: 'body2',
            ...(active && {
              typography: 'subtitle2',
            }),
          }}
        />
      </ListItemButton>
    </Link>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.node,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};
