import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Child from './Child';
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

const nestedTheme = {
  context: {
    color: "lime",
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Child></Child>
      <ThemeProvider theme={innerTheme}>
        <Child></Child>
        <Child2></Child2>
        <Nested classes={nestedTheme}></Nested>
        <Child3></Child3>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
