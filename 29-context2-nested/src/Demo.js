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
    console.log('before change, old value: ',value.theme);

    let newTheme =  ((value.theme === themes.dark) ? themes.light : themes.dark);
    console.log('set new theme: ',newTheme);
    console.log('before copy, old value: ',value);
    let newValue =Object.assign({}, value);
    console.log('after copy, old value: ',value);
    console.log('copy old value to new value: ', newValue);
    console.log(value === newValue);
    newValue.theme = newTheme;
    console.log('set new theme to new value: ', newValue);

    setValue( newValue );
  };

  const initTheme = {
    theme: themes.light,
    toggleTheme: toggleTheme
  };

  const [value, setValue] = useState(initTheme);

  console.log(value);
  
  return (
    <ThemeContext.Provider value={value}>
      <Content />
    </ThemeContext.Provider>
  );

};

export default Demo;