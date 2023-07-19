import PropTypes from 'prop-types';
import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, Tooltip } from '@mui/material';
import Image from 'src/components/image/Image';

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  const theme = useTheme();

  const singleLogo = (
    <Box sx={{ position: 'relative', height: '100px' }}>
      <Image src="/assets/images/scc-logo-blue-sm2.png" sx={{ height: 1 }} alt="South Curl Curl SLSC logo" disabledEffect />
    </Box>
  );

  const fullLogo = (
    <Tooltip arrow placement="bottom" title="home" enterDelay={100}>
      <Box sx={{ lineHeight: 0, position: 'relative', width: '240px' }}>
        <Image src="/assets/images/scc-logo-blue-sm2.png" alt="South Curl Curl SLSC logo" disabledEffect sx={{ height: 1 }} />
      </Box>
    </Tooltip>
  );

  return (
    <Link component={NextLink} href="/" color="inherit" aria-label="go to homepage" sx={{ lineHeight: 0 }}>
      <Box
        sx={{
          // width: single ? 64 : 75,
          borderRadius: 1,
          overflow: 'hidden',
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
