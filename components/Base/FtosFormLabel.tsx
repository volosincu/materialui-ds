import React from 'react';
import FormLabel, { FormLabelProps } from '@mui/material/FormLabel';

export default function FtosFormLabel(props: FormLabelProps) {
  return <FormLabel {...props}>{props.children}</FormLabel>;
}
