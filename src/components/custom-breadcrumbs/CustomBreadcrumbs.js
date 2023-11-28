import PropTypes from 'prop-types';
// @mui
import { Box, Link, Stack, Typography, Breadcrumbs } from '@mui/material';
//
import LinkItem from './LinkItem';

// ----------------------------------------------------------------------

export default function CustomBreadcrumbs({ links, action, heading = 'Quik links on this page', moreLink, activeLast, theme, sx, ...other }) {
  const lastLink = links[links.length - 1].name;

  console.log(theme);

  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          {/* HEADING */}
          {heading && (
            <Typography variant="caption" gutterBottom>
              {heading}
            </Typography>
          )}

          {/* BREADCRUMBS */}
          {!!links.length && (
            <Breadcrumbs separator={<Separator />} {...other}>
              {links.map((link) => (
                <LinkItem key={link.name || ''} link={link} activeLast={activeLast} /*disabled={link.name === lastLink}*/ />
              ))}
            </Breadcrumbs>
          )}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
      </Stack>

      {/* MORE LINK */}
      {!!moreLink && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map((href) => (
            <Link color={theme.palette.mode === 'dark' ? '#fff' : '#000'} noWrap key={href.name} href={href.href} variant="body2" target="_blank" rel="noopener">
              {href.name}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

CustomBreadcrumbs.propTypes = {
  sx: PropTypes.object,
  action: PropTypes.node,
  links: PropTypes.array,
  heading: PropTypes.string,
  moreLink: PropTypes.array,
  activeLast: PropTypes.bool,
};

// ----------------------------------------------------------------------

function Separator() {
  return (
    <Box
      component="div"
      sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ffdc09', zIndex: 100, border: '0.5px solid blue' }}
      // sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }}
    />
  );
}
