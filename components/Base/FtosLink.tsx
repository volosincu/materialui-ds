import Link, { LinkProps } from '@mui/material/Link';
import React from 'react';

function FtosLink(props: LinkProps) {
  return <Link {...props}>{props.children}</Link>;
}

export default FtosLink;
