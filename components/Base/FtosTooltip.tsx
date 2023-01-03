import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import React from 'react';

function FtosTooltip(props: TooltipProps) {
  return <Tooltip {...props}>{props.children}</Tooltip>;
}

export default FtosTooltip;
