import React, { useState } from 'react';
import Main from './Main';
import Details from './Details';

const Display = ({ page }) => {
  const [display, setDisplay] = useState({main: <Main />, details: <Details />});

  return (
    <div>
      {display[page]}
    </div>
  )
}

export default Display;