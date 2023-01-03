import Avatar, { AvatarProps } from '@mui/material/Avatar';
import React from 'react';

function FtosAvatar(props: AvatarProps) {
  return <Avatar {...props}>{props.children}</Avatar>;
}

export default FtosAvatar;
