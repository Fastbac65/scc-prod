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

export default function NavList({ item }) {
  const { path } = item;

  // const { pathname } = useRouter();
  // const [openMenu, setOpenMenu] = useState(false);

  const { active, isExternalLink } = useActiveLink(path, false);

  return <NavItem item={item} active={active} isExternalLink={isExternalLink} />;
}

NavList.propTypes = {
  item: PropTypes.object,
};

// ----------------------------------------------------------------------
