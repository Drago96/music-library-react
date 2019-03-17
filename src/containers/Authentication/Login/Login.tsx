import React, { FunctionComponent } from 'react';

import { SIGN_IN_MUTATION } from '../../../apollo/mutations/auth/sign-in';

import LoginComponent from '../../../components/Authentication/Login/Login';
import Authentication from '../Authentication';

const Login: FunctionComponent = () => (
  <Authentication
    component={LoginComponent}
    mutation={{ definition: SIGN_IN_MUTATION, root: 'signIn' }}
  />
);

export default Login;
