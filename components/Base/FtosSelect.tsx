import Select, { SelectProps } from '@mui/material/Select';
import React from 'react';

function FtosSelect(props: SelectProps) {
  return <Select {...props}>{props.children}</Select>;
}

export default FtosSelect;
