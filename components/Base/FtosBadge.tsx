import Badge, { BadgeProps } from '@mui/material/Badge';
import React from 'react';

function FtosBadge(props: BadgeProps) {
  return <Badge {...props}>{props.children}</Badge>;
}

export default FtosBadge;
