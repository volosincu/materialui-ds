import Alert, { AlertProps } from '@mui/material/Alert';
import React from 'react';

function FtosAlert(props: AlertProps) {
  return <Alert {...props}>{props.children}</Alert>;
}

export default FtosAlert;
