import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import React from 'react';

function FtosAccordionDetails(props: AccordionDetailsProps) {
  return <AccordionDetails {...props}>{props.children}</AccordionDetails>;
}

export default FtosAccordionDetails;
