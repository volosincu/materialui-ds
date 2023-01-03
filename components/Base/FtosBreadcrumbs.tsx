import Breadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import React from 'react';

function FtosBreadcrumbs(props: BreadcrumbsProps) {
  return <Breadcrumbs {...props}>{props.children}</Breadcrumbs>;
}

export default FtosBreadcrumbs;
