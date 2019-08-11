import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Simple example of hooks</h1>
      <p>You have clicked {count} times.</p>
      <button onClick={()=>{setCount(count+1);}}>Click me</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  );
}

export default App;
