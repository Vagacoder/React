import React from 'react';
import { ThemeContext, themes } from './theme-context'

function ThemeTogglerButton() {

  return (
    <ThemeContext.Consumer>
      {value => {
        const theme = value.theme;
        const toggleTheme = value.toggleTheme;
        console.log('theme: ', theme);
        console.log('toggleTheme : ', toggleTheme);
        return (
          <button
            onClick={toggleTheme}
            style={{ background: theme.background }}
          >
            Toggle Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;