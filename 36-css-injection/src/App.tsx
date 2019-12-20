import React from 'react';
import './App.css';
import Comp1 from './Comp1';

import { StylesProvider } from '@material-ui/core';

const App: React.FC = () => {
  return (

    <StylesProvider injectFirst>
      <div className="App">
        App is here
        <Comp1 />
      </div>
    </StylesProvider>
  );
}

export default App;
