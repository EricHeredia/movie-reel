import React from 'react';
import Main from './Main';
import Details from './Details';

const Display = ({ show, setShowthis }) => {

  console.log('rendered display')
  return (
    <div>
      <button onClick={() => setShowthis(show === 'Main' ? 'Details':'Main')}>TEST</button>
      {show === 'Main' ? <Main />:<Details />}
    </div>
  )
}

export default Display;