import React, { useState } from 'react';
import randomNumber from 'random-number-vc';

function App() {

  const [state, setState] = useState(0);

  const handleOnClick = () => {
    setState(randomNumber(5, 20));
  }
  return (
    <div>
      <p>Randoom Number Generator</p>
      <p>{state}</p>
      <button
        onClick={handleOnClick}
      >Generate random number</button>
    </div>
  );
}

export default App;
