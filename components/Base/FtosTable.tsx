import Table, { TableProps } from '@mui/material/Table';
import React from 'react';

function FtosTable(props: TableProps) {
  return <Table {...props}>{props.children}</Table>;
}

export default FtosTable;
