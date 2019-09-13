import React from 'react';
import { useSTate } from 'react';
import { ThemeContext, themes } from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;

    console.log(this.props);
    console.log(this.context);

    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;

