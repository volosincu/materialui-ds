import React from 'react';
import lib from 'materialui-ds';

console.clear();
// console.log(lib)

function App() {
  return (
    <div className="App">
      <lib.Base.FtosButton variant="contained">Button</lib.Base.FtosButton>

      <lib.Base.FtosButton variant="outlined">Button</lib.Base.FtosButton>

      <lib.Base.FtosButton variant="text">Button</lib.Base.FtosButton>

      {/* <div style={{ paddingTop: 20 }}>Button Tertiary</div>
      <lib.Base.FtosButton color="tertiary">Button</lib.Base.FtosButton> */}

      <lib.Base.FtosButton color="error">🍟</lib.Base.FtosButton>
    </div>
  );
}

export default App;
