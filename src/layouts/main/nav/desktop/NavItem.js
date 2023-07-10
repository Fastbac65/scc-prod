import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// next
import NextLink from 'next/link';
// @mui
import { Link } from '@mui/material';
// components
// import Iconify from 'src/components/iconify';
//
import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(({ item, active, isExternalLink, ...other }, ref) => {
  const { title, path } = item;

  const renderContent = (
    <StyledNavItem ref={ref} disableRipple active={active} {...other}>
      {/* {title.toUpperCase()} */}
      {title}
    </StyledNavItem>
  );

  // ExternalLink
  if (isExternalLink) {
    return (
      <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }

  // Default
  return (
    <Link component={NextLink} href={path} color="inherit" underline="none">
      {renderContent}
    </Link>
  );
});

NavItem.propTypes = {
  active: PropTypes.bool,
  isExternalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};
