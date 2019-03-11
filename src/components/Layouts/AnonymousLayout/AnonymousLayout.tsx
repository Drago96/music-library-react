import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './AnonymousLayout.styles';
import logo from '../../../assets/images/logo.svg';

const AnonymousLayout: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container={true}
      spacing={32}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item={true}>
        <img src={logo} className={classes.logo} />
      </Grid>
      <Grid item={true}>
        <main>{children}</main>
      </Grid>
    </Grid>
  );
};

export default AnonymousLayout;
