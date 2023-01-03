import AccordionActions, { AccordionActionsProps } from '@mui/material/AccordionActions';
import React from 'react';

function FtosAccordionActions(props: AccordionActionsProps) {
  return <AccordionActions {...props}>{props.children}</AccordionActions>;
}

export default FtosAccordionActions;
