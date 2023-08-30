import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function DateAlert({ open, handleClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
        <AlertTitle>Warning</AlertTitle>
        선택한 날짜 범위는 5일을 초과할 수 없습니다.
      </Alert>
    </Snackbar>
  );
}

export default DateAlert;