import React, { FunctionComponent } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './config/materialUi/theme';

import logo from './assets/images/logo.svg';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <img src={logo} />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
