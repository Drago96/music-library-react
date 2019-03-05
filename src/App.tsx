import React, { FunctionComponent } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import { theme } from './config/material-ui/theme';
import { client } from './config/apollo/client';

import logo from './assets/images/logo.svg';

const App: FunctionComponent = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <img src={logo} />
      </MuiThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
