import React, { FunctionComponent, memo } from 'react';
import { Typography } from '@material-ui/core';

import Authentication from '../Authentication';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import { Link } from '../../UI/Link/Link';

interface OwnProps {
  onSubmit: (values: { email: string; password: string }) => Promise<any>;
}

const Login: FunctionComponent<OwnProps> = memo(({ onSubmit }) => (
  <Authentication
    title="Login"
    components={{
      form: () => (
        <AuthenticationForm onSubmit={onSubmit} button={{ text: 'Login' }} />
      ),
      actions: () => (
        <Typography align="center" gutterBottom={true}>
          Don't have an account yet?{' '}
          <Link to="/register" color={'secondary'}>
            Click here to sign up.
          </Link>
        </Typography>
      )
    }}
  />
));

export default Login;
