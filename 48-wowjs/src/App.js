import React from 'react';
import './App.css';

import WOW from 'wowjs';

function App() {

  React.useEffect(()=>{
    console.log('initialize wowjs');
    new WOW.WOW().init();
  });

  return (
    <div className="App">
    <div className='background'>
      // ! background of night sky with stars
      <div id='stars' />
      <div id='stars2' />
      <div id='stars3' />

    </div>
    </div>
  );
}

export default App;
