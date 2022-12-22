import React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export default function FtosIconButton(props: IconButtonProps) {
  return <IconButton {...props}>{props.children}</IconButton>;
}
