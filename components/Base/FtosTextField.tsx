import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export default function FtosTextField(props: TextFieldProps) {
  return <TextField {...props}>{props.children}</TextField>;
}
