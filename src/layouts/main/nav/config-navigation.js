// icons
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  { access: 'public', title: 'Our Club', path: '/our-club', icon: <Iconify icon="material-symbols:military-tech-outline" /> },
  { access: 'public', title: 'Venue Hire', path: '/venue-hire', icon: <Iconify icon="material-symbols:celebration" /> },
  { access: 'public', title: 'Nippers', path: '/nippers', icon: <Iconify icon="mdi:umbrella-beach" /> },
  { access: 'public', title: 'Competitors', path: '/competitors', icon: <Iconify icon="mdi:gym" /> },
  { access: 'member', title: 'Patrol', path: '/patrol', icon: <Iconify icon="mdi:flag-variant-outline" /> },
  { access: 'member', title: 'Members', path: '/members', icon: <Iconify icon="ic:twotone-remember-me" /> },
];
