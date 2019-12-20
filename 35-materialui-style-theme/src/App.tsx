import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import Child0 from './Child0';
import Child1 from './Child1';
import Child2 from './Child2';
import Child2_1 from './Child2_1';
import Child3 from './Child3';
import Nested from './Nested';

export interface MyTheme {
  color: string,
  background: string,
}

const outerTheme: MyTheme = {
  color: 'yellow',
  background: 'hotpink',
};

const innerTheme: MyTheme = {
  color: 'orange',
  background: 'mediumseagreen',
}

// Official way to create a MUI theme, not a simple object
const anotherTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: "#d3d3d3",
      main: "#808080",
      dark: "#a9a9a9",
    },
    secondary: {
      light: "#ffb6c1",
      main: "#ff69b4",
      dark: "#dc143c",
    }
  }
})

// not used
const nestedTheme = {
  context: {
    color: "orange",
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={anotherTheme}>
      <Child0></Child0>
      <ThemeProvider theme={outerTheme}>
        <Child1></Child1>
        <ThemeProvider theme={innerTheme}>
          <Child1></Child1>
          <Child2></Child2>
          <Child2_1></Child2_1>
          <Child3></Child3>
          <Nested classes={{ label: 'my-label' }}></Nested>
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
