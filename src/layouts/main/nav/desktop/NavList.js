import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// // next
// import NextLink from 'next/link';
// import { useRouter } from 'next/router';
// // @mui
// import { Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useActiveLink from 'src/hooks/useActiveLink';
// components

//
import { NavItem } from './NavItem';

// ----------------------------------------------------------------------

export default function NavList({ item, ...other }) {
  const { path } = item;
  const { user } = other;

  // const { pathname } = useRouter();
  // const [openMenu, setOpenMenu] = useState(false);

  const { active, isExternalLink } = useActiveLink(path, false);

  if (item.access === 'member' && !user) return;

  return <NavItem item={item} active={active} isExternalLink={isExternalLink} {...other} />;
}

NavList.propTypes = {
  item: PropTypes.object,
};

// ----------------------------------------------------------------------
