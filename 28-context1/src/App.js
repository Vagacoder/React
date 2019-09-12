import React from 'react';
import { useState } from 'react';
import ThemedButton from './themed-button';
import { ThemeContext, themes } from './theme-context';

const Toolbar = (props) => {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
};


const App = (props) =>{

  const [theme, setTheme] = useState(themes.light);

  console.log(theme);

  const toggleTheme = () => {
    setTheme(theme === themes.dark? themes.light: themes.dark);
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
      <div>
        <ThemedButton />
      </div>
    </div>
  );
}

export default App;
