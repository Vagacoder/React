import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange, red, blue, green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root:{
    color: theme.color,
    '&$checked': {
      color: theme.color,
    },
  },
  checked: {},
}));


function CustomCheckbox(){
  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
      />
  );
}

const theme = createMuiTheme({color: blue[500]});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
          <h1>Material UI using Theme</h1>
          <p>Material UI -> Usage -> Typography -> Theme </p>
          <p>this example is using Material-UI Theme</p>
          <a href="https://material-ui.com/customization/themes/">The description link is here</a>
          
        </div>
        <div>
          <CustomCheckbox />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
