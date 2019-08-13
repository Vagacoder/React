import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // useState hook
  const [count, setCount] = useState(0);

  // useEffect hook
  useEffect(()=>{
    document.title = `You clciked ${count} times`;
  }, [count]
  )

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
