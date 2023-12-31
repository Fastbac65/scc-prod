import { Dialog, DialogTitle, IconButton, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useSettingsContext } from '../settings';
import Iconify from '../iconify/Iconify';

const Modal = () => {
  const router = useRouter();
  const {
    state: { modal },
    dispatch,
  } = useSettingsContext();

  const handleClose = () => {
    if (modal.title.includes('Password')) {
      //  a user has just closed the reset password verification or email signin windown
      router.push('/');
    }
    if (modal.title === 'Purchase Success') {
      // shallow routing to /services/
      router.push('/services/', undefined, { shallow: true });
    }
    dispatch({ type: 'MODAL', payload: { ...modal, open: false } });
  };

  return (
    // removing onClose={handleClose} from Dialog stopped background clicking from closing the modal
    <Dialog maxWidth="600px" sx={{ mx: -4 }} open={modal.open} PaperProps={{ elevation: 2 }}>
      <Box sx={{ minWidth: '340px' }}>
        <DialogTitle sx={{ pb: 1 }}>
          {modal.title}
          <IconButton
            aria-label="Close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          >
            <Iconify icon="carbon:close" />
          </IconButton>
        </DialogTitle>
        {modal.content}
      </Box>
    </Dialog>
  );
};
export default Modal;
