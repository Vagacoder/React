import React, { useState } from 'react';
import { ThemeProvider, useTheme, makeStyles, createStyles } from '@material-ui/styles';
import { render } from 'react-dom';

interface AppTheme {
  color: string;
}

interface ComponentProps {
  backgroundColor: string
}

const useStyles = makeStyles((theme: AppTheme) => {
  return createStyles({
    display: (props: ComponentProps) => ({
      backgroundColor: props.backgroundColor,
      color: theme.color,
    }),
  })
}
);

const Component = React.memo((props: ComponentProps) => {
  const classes = useStyles(props);
  const theme = useTheme<AppTheme>();

  const rendered = React.useRef(1);
  React.useEffect(() => {
    rendered.current += 1;
  });

  return (
    <div className={classes.display}>
      rendered {rendered.current} times
      <br />
      color: {theme.color}
      <br />
      backgroundColor: {props.backgroundColor}
    </div>
  );
});


const App: React.FC = () => {

  const [backgroundColor, setBackgroundColor] = useState('#2196f3');
  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setBackgroundColor(event.target.value);
  };

  const [color, setColor] = React.useState('#ffffff');
  const handleColorChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const theme = React.useMemo(() => ({ color }), [color]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <fieldset>
          <div>
            <label htmlFor="color">theme color: </label>
            <input 
            type="color" 
            id="color" 
            onChange={handleColorChange}
            value={color}/>
          </div>
          <div>
            <label htmlFor="background-color">background-color property: </label>
            <input 
            type="color" 
            id="background-color" 
            onChange={handleBackgroundColorChange} 
            value={backgroundColor}
            />
          </div>
        </fieldset>
        <Component backgroundColor={backgroundColor} />
      </div>
    </ThemeProvider>
  );
}

export default App;
