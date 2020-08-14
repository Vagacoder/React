import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <FontAwesomeIcon icon="check-square" />Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
        <FontAwesomeIcon icon={faCoffee} />
        Try Light coffee
        <FontAwesomeIcon icon={["fal", "coffee"]} />
        Try i tag 
        <i class="fas fa-coffee"></i>
        Try check square
        <FontAwesomeIcon icon={faCheckSquare} />
        Try fab fab github 
        <FontAwesomeIcon icon={faGithub} />
        Try fab fab linkedin 
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
}

export default App;
