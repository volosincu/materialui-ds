// import React, {useState} from 'react';
// import React from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import lib from 'materialui-ds';
// import {Base} from 'materialui-ds';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

console.clear();
console.log(lib)
// console.log(Base)


function App() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="App" >
     <br></br>

     <h2>Accordion</h2> 
     <lib.Base.FtosAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <lib.Base.FtosAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          Collapsible Group Item #1
        </lib.Base.FtosAccordionSummary>
        <lib.Base.FtosAccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
        </lib.Base.FtosAccordionDetails>
      </lib.Base.FtosAccordion>
      <lib.Base.FtosAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <lib.Base.FtosAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
          Collapsible Group Item #2
        </lib.Base.FtosAccordionSummary>
        <lib.Base.FtosAccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
        </lib.Base.FtosAccordionDetails>
      </lib.Base.FtosAccordion>
      <lib.Base.FtosAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <lib.Base.FtosAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
          Collapsible Group Item #3
        </lib.Base.FtosAccordionSummary>
        <lib.Base.FtosAccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
        </lib.Base.FtosAccordionDetails>
      </lib.Base.FtosAccordion>

    <br></br>
    <br></br>

    <h2>Alert</h2>
    <lib.Base.FtosAlert severity="error">This is an error alert — check it out!</lib.Base.FtosAlert>
    <lib.Base.FtosAlert severity="warning">This is a warning alert — check it out!</lib.Base.FtosAlert>
    <lib.Base.FtosAlert severity="info">This is an info alert — check it out!</lib.Base.FtosAlert>
    <lib.Base.FtosAlert severity="success">This is a success alert — check it out!</lib.Base.FtosAlert>


    <br></br>
    <br></br>

    <h2>Avatar</h2>
    <lib.Base.FtosAvatar sx={{ width: 24, height: 24 }}>AR</lib.Base.FtosAvatar>
    <lib.Base.FtosAvatar>AR</lib.Base.FtosAvatar>
    <lib.Base.FtosAvatar sx={{ width: 64, height: 64 }}>AR</lib.Base.FtosAvatar>

    <br></br>
    <br></br>

    <h2>Badge</h2>
    <lib.Base.FtosBadge color="primary">4</lib.Base.FtosBadge>

    <br></br>
    <br></br>

    <h2>Breadcrumbs</h2>
    <lib.Base.FtosBreadcrumbs>
      <lib.Base.FtosLink underline="hover" color="inherit" href="/">
      Fintech OS
    </lib.Base.FtosLink>
    <lib.Base.FtosLink
      underline="hover"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Base
    </lib.Base.FtosLink>
    <Typography>Breadcrumbs</Typography>
    </lib.Base.FtosBreadcrumbs>
    
    
    <br></br>
    <br></br>

     <h2>Button</h2>
      <lib.Base.FtosButton variant="contained">Primary</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="outlined" >Secondary</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="text">Tertiary</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="contained" disabled>Disabled</lib.Base.FtosButton> <span></span>
 
      

      {/* <div style={{ paddingTop: 20 }}>Button Tertiary</div>
      <lib.Base.FtosButton color="tertiary">Button</lib.Base.FtosButton> */}


      <lib.Base.FtosButton variant="contained" color="error">Error</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="contained" > <span>&#127919;</span></lib.Base.FtosButton> <span></span>

      <br></br>
      <br></br>

      <p>Button Sizes</p>

      <lib.Base.FtosButton variant="contained" size='small'>Small</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="contained">Default</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="contained" size='large'>Large</lib.Base.FtosButton> <span></span>

      <br></br>
      <br></br>

    <h2>Icon Button</h2>

    
    <lib.Base.FtosIconButton color="primary">&#x2686;</lib.Base.FtosIconButton><span></span>
    <lib.Base.FtosIconButton color="secondary">&#x2686;</lib.Base.FtosIconButton><span></span>
    <lib.Base.FtosIconButton>&#x2686;</lib.Base.FtosIconButton><span></span>
    <lib.Base.FtosIconButton color="error">&#x2686;</lib.Base.FtosIconButton><span></span><br></br>
      <br></br>

      <p>IconButton Sizes</p>

      <lib.Base.FtosIconButton color="primary" size='small'>&#x2686;</lib.Base.FtosIconButton><span></span>
      <lib.Base.FtosIconButton color="primary">&#x2686;</lib.Base.FtosIconButton><span></span>
      <lib.Base.FtosIconButton color="primary" size='large'>&#x2686;</lib.Base.FtosIconButton><span></span>
    

      <br></br>
      <br></br>
      
      <h2>Button Group</h2>

      {/* use variant outlined as active state */}
      <lib.Base.FtosButtonGroup aria-label="button group">
        <lib.Base.FtosButton variant="text">One</lib.Base.FtosButton>
        <lib.Base.FtosButton variant="text">Two</lib.Base.FtosButton>
        <lib.Base.FtosButton variant="outlined">Three</lib.Base.FtosButton>
      </lib.Base.FtosButtonGroup>

    <br></br>
    <br></br>

    <lib.Base.FtosButtonGroup  fullWidth={true} aria-label=" button group">
      <lib.Base.FtosButton variant="text">One</lib.Base.FtosButton>
      <lib.Base.FtosButton>Two</lib.Base.FtosButton>
      <lib.Base.FtosButton variant="text">Three</lib.Base.FtosButton>
    </lib.Base.FtosButtonGroup>

    <br></br>
    <br></br>
    

    <h2>Card</h2>

    <lib.Base.FtosCard><h3>This is a title</h3><p>Start from scratch. Drag and drop widgets to build your journey.</p></lib.Base.FtosCard>
    <lib.Base.FtosCard aria-disabled><h3>This is a title</h3><p>Start from scratch. Drag and drop widgets to build your journey.</p></lib.Base.FtosCard>
  
    
    <br></br>
    <br></br>
    

    <h2>Checkbox</h2>

    <lib.Base.FtosCheckbox defaultChecked />
    <lib.Base.FtosCheckbox />
    <lib.Base.FtosCheckbox disabled />
    <lib.Base.FtosCheckbox disabled checked />
  
    <br></br>
    <br></br>
    

    <h2>Chip</h2>

    <lib.Base.FtosChip label="Chip Filled" />
  
  
    <br></br>
    <br></br>
    

    <h2>Inputs</h2>

    <lib.Base.FtosCheckbox defaultChecked />
    
    <br></br>
    <br></br>
    

    <h2>Progress</h2>

    <lib.Base.FtosLinerProgress></lib.Base.FtosLinerProgress>
    
    
    <br></br>
    <br></br>
    

    <h2>Pagination</h2>

    <lib.Base.FtosPagination count={10} color="primary" shape="rounded" />
    
    <br></br>
    <br></br>
    

    <h2>Radio</h2>

    <lib.Base.FtosRadio />
     
    <br></br>
    <br></br>
    
    </div>
  );
}

export default App;
