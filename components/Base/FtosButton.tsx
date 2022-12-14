import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

function FtosButton(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}

export default FtosButton;
