import React from 'react-dom';
import { useSTate } from 'react';
import { ThemeContext, themes } from './theme-context';

const ThemedButton = (props, context) => {

    // const [contextType, setContextType ] = useSTate(ThemeContext);
    console.log(props);
    console.log(context);
    
    return (
        <button 
        {...props} 
        style ={{ backgroundColor : context.background}}>
       </button>
    );
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;