import React, { FunctionComponent } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo-hooks';

import { theme } from './config/material-ui/theme';
import { client } from './apollo/client';

import ApplicationRouter from './router/ApplicationRouter';

const App: FunctionComponent = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <ApplicationRouter />
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
