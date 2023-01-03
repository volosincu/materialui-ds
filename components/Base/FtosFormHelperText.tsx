import React from 'react';
import FormHelperText, { FormHelperTextProps } from '@mui/material/FormHelperText';

export default function FtosFormHelperText(props: FormHelperTextProps) {
  return <FormHelperText {...props}>{props.children}</FormHelperText>;
}
