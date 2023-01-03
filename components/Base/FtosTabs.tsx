import Tabs, { TabsProps } from '@mui/material/Tabs';
import React from 'react';

function FtosTabs(props: TabsProps) {
  return <Tabs {...props}>{props.children}</Tabs>;
}

export default FtosTabs;
