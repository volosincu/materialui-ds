import React from 'react';
import lib from 'materialui-ds';
import { Padding } from '@mui/icons-material';
import { Card } from '@mui/material';

console.clear();
// console.log(lib)

function App() {
  return (
    <div className="App" >
     <br></br>
     <h2>Button</h2>
     
      <lib.Base.FtosButton variant="contained">Contained</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="outlined" >Outlined</lib.Base.FtosButton> <span></span>
       <lib.Base.FtosButton variant="text">Text</lib.Base.FtosButton> <span></span>
       <lib.Base.FtosButton variant="contained" disabled>Disabled</lib.Base.FtosButton> <span></span>
 
      

      {/* <div style={{ paddingTop: 20 }}>Button Tertiary</div>
      <lib.Base.FtosButton color="tertiary">Button</lib.Base.FtosButton> */}


      <lib.Base.FtosButton variant="contained" color="error">Error</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="contained" > <span>&#127919;</span></lib.Base.FtosButton> <span></span>

      <br></br>
      <br></br>

      <p>Sizes</p>

      <lib.Base.FtosButton variant="contained" size='small'>Small</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="contained">Default</lib.Base.FtosButton> <span></span>
      <lib.Base.FtosButton variant="contained" size='large'>Large</lib.Base.FtosButton> <span></span>

    

      <br></br>
      <br></br>
      
      <h2>Button Group</h2>

      <lib.Base.FtosButtonGroup  aria-label=" button group">
      <lib.Base.FtosButton>One</lib.Base.FtosButton>
      <lib.Base.FtosButton>Two</lib.Base.FtosButton>
      <lib.Base.FtosButton>Three</lib.Base.FtosButton>
    </lib.Base.FtosButtonGroup>

    <br></br>
    <br></br>

    <p>Full width</p>

    <lib.Base.FtosButtonGroup  fullWidth={true} aria-label=" button group">
      <lib.Base.FtosButton>One</lib.Base.FtosButton>
      <lib.Base.FtosButton>Two</lib.Base.FtosButton>
      <lib.Base.FtosButton>Three</lib.Base.FtosButton>
    </lib.Base.FtosButtonGroup>

    <br></br>
    <br></br>

    <h2>Card</h2>
    
     
    </div>
  );
}

export default App;
