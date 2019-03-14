import React, { FunctionComponent } from 'react';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';

import { useStyles } from './Login.styles';

import PaperHeader from '../../UI/PaperHeader/PaperHeader';
import LoginForm from '../../../containers/Authentication/LoginForm/LoginForm';

const Login: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.root}>
      <CardHeader component={() => <PaperHeader title={'Login'} />} />
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardActions />
    </Card>
  );
};

export default Login;
