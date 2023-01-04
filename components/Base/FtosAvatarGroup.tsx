import AvatarGroup, { AvatarGroupProps } from '@mui/material/AvatarGroup';
import React from 'react';

function FtosAvatarGroup(props: AvatarGroupProps) {
  return <AvatarGroup {...props}>{props.children}</AvatarGroup>;
}

export default FtosAvatarGroup;
