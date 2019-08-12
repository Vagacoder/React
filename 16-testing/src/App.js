import React, { useState, useEffect } from 'react';
import './App.css';

function App(props) {

  const [user, setUser] = useState(null);

  // a typical async fetch function
  async function fetchUserData(id) {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }

  useEffect(()=>{
    fetchUserData(props.id);
  }, [props.id]);

  if (!user){
    return 'loading ...';
  }

  return (
    <div className="user-info">
      <summary>{user.name}</summary>
      <strong>{user.age} years old</strong>
      <br></br>
      <div>lives in {user.address}</div>
    </div>
  );
}

export default App;
