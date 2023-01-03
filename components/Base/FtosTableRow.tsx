import TableRow, { TableRowProps } from '@mui/material/TableRow';
import React from 'react';

function FtosTableRow(props: TableRowProps) {
  return <TableRow {...props}>{props.children}</TableRow>;
}

export default FtosTableRow;
