/// <reference types="react" />
import { StyledComponentProps } from '@mui/material/styles';
import { ButtonProps, ButtonTypeMap } from '@mui/material/Button';
import { ExtendButtonBase } from '@mui/material';
export type JDProps = ButtonProps & ExtendButtonBase<ButtonTypeMap<{}, 'button'>> & StyledComponentProps<string>;
export default function JDButton(props: JDProps): JSX.Element;
