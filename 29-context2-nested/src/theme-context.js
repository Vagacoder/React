import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: 'white',
  },
  dark: {
    foreground: '#ffffff',
    background: 'darkgrey',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});