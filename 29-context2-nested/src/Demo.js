import React from 'react';
import { useState } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

const Content = () =>{
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

const Demo = () => {

  const toggleTheme = () => {
    console.log('clicked!');
    console.log(value.theme);

    let newTheme =  value.theme === themes.dark ? themes.light : themes.dark;

    setValue({
      theme: newTheme,
      toggleTheme: toggleTheme
    });
  };

  const [value, setValue] = useState({
    theme: themes.light,
    toggleTheme: toggleTheme
  });

  console.log(value);
  
  return (
    <ThemeContext.Provider value={value}>
      <Content />
    </ThemeContext.Provider>
  );

};

export default Demo;