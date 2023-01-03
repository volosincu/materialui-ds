import Divider, { DividerProps } from '@mui/material/Divider';
import React from 'react';

function FtosDivider(props: DividerProps) {
  return <Divider {...props}>{props.children}</Divider>;
}

export default FtosDivider;
