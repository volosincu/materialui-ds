import TableCell, { TableCellProps } from '@mui/material/TableCell';
import React from 'react';

function FtosTableCell(props: TableCellProps) {
  return <TableCell {...props}>{props.children}</TableCell>;
}

export default FtosTableCell;
