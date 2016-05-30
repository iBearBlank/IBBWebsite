import React, { PropTypes } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default function App(props) {
  return <MuiThemeProvider muiTheme={darkMuiTheme}>{props.children}</MuiThemeProvider>;
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
