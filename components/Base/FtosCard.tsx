import React from 'react';
import Card, { CardProps } from '@mui/material/Card';

export default function FtosCard(props: CardProps) {
  return <Card {...props}>{props.children}</Card>;
}
