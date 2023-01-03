import Chip, { ChipProps } from '@mui/material/Chip';
import React from 'react';

function FtosChip(props: ChipProps) {
  return <Chip {...props}>{props.children}</Chip>;
}

export default FtosChip;
