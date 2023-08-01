// @mui
import { styled } from '@mui/material/styles';
import { Paper, ListSubheader, ListItemButton } from '@mui/material';

// ----------------------------------------------------------------------

export const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => {
  const dotActiveStyle = {
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 6,
    height: 6,
    left: -10,
    backgroundColor: '#ffdc09',
    border: '0.5px solid blue',
    // backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white,
  };

  return {
    ...theme.typography.body2,
    padding: 0,
    height: '100%',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      opacity: 0.7,
      backgroundColor: 'transparent',
      '&::before': {
        ...dotActiveStyle,
        opacity: 0.5,
      },
    },
    // Active
    ...(active && {
      // color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightSemiBold,
      '&::before': dotActiveStyle,
    }),
  };
});

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
