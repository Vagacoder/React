import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange, red, blue, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  primary: 'hotpink',
  secondary: 'deepskyblue',
  danger: 'crimson',
  info: 'dodgerblue',
  success: 'mediumseagreen',
  warning: 'darkorange'
});

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.primary,
    '&$checked': {
      color: theme.success,
    },
  },
  checked: {
    color: theme.info,
  }
}));


function CustomCheckbox() {
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


function App() {
  const classes = useStyles();

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
          <Checkbox 
          classes={classes.checked}/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
