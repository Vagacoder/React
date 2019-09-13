import React from 'react';
import { ThemeContext } from './theme-context'

function ThemeTogglerButton() {

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
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