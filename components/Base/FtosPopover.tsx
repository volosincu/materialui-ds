import Popover, { PopoverProps } from '@mui/material/Popover';
import React from 'react';

function FtosPopover(props: PopoverProps) {
  return <Popover {...props}>{props.children}</Popover>;
}

export default FtosPopover;
