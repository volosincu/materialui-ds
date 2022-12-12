import * as React from 'react';
import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';

export default function FtosButtonGroup(props: ButtonGroupProps) {
  return <ButtonGroup {...props}>{props.children}</ButtonGroup>;
}
