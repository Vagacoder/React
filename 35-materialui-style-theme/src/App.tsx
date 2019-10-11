import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Child1 from './Child';
import Child2 from './Child2';
import Child3 from './Child3';
import Nested from './Nested';

export interface MyTheme {
  background: string
}

const outerTheme = {
  background: 'hotpink',
};

const innerTheme = {
  background: 'mediumseagreen',
}

// not used
const nestedTheme = {
  context: {
    color: "orange",
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Child1></Child1>
      <ThemeProvider theme={innerTheme}>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
        <Nested classes={{ label: 'my-label' }}></Nested>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
