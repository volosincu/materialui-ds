import React from 'react';
import { styled, StyledComponentProps } from '@mui/material/styles';
import Button, { ButtonProps, ButtonTypeMap } from '@mui/material/Button';
import { ExtendButtonBase } from '@mui/material';

// Example
const MuiButton = styled(Button)<any>({
  paddingTop: '14px',
  paddingBottom: '14px',
  paddingLeft: '0px',
  borderRadius: '6px',
  margin: '0px 10px',
  backgroundColor: 'red',
});

export type JDProps = ButtonProps &
  ExtendButtonBase<ButtonTypeMap<{}, 'button'>> &
  StyledComponentProps<string>;

export default function JDButton(props: JDProps) {
  return <MuiButton {...props}>{props.children}</MuiButton>;
}
