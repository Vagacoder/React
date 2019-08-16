import React from 'react';
import './App.css';
import Map from './map';

function App(props) {
  return (
    <div className="App">
      <address>
        Conact {props.name} via{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          email
        </a>
        or on their <a data-testid="site" href={props.site}>
          website
        </a>
      </address>
      <Map center={props.center} />
    </div>
  );
}

export default App;
