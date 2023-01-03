import Accordion, { AccordionProps } from '@mui/material/Accordion';
import React from 'react';

function FtosAccordion(props: AccordionProps) {
  return <Accordion {...props}>{props.children}</Accordion>;
}

export default FtosAccordion;
