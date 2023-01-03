import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import React from 'react';

function FtosAccordionSummary(props: AccordionSummaryProps) {
  return <AccordionSummary {...props}>{props.children}</AccordionSummary>;
}

export default FtosAccordionSummary;
