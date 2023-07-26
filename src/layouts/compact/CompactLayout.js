import PropTypes from 'prop-types';
// @mui
import { Stack, Container } from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';
import { useSettingsContext } from 'src/components/settings';
import LoadingScreen from 'src/components/loading-screen/LoadingScreen';

// ----------------------------------------------------------------------

export default function CompactLayout({ children }) {
  const isOffset = useOffSetTop(2);
  const { loading } = useSettingsContext();

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Header isOffset={isOffset} />

      <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 480,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Stack>
      </Container>
    </>
  );
}

CompactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
