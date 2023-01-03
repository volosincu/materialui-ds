import Tab, { TabProps } from '@mui/material/Tab';
import React from 'react';

function FtosTab(props: TabProps) {
  return <Tab {...props}>{props.children}</Tab>;
}

export default FtosTab;
