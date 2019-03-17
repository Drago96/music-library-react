import React, { FunctionComponent, useCallback } from 'react';

import { SIGN_UP_MUTATION } from '../../../apollo/mutations/auth/sign-up';

import RegisterComponent from '../../../components/Authentication/Register/Register';
import Authentication from '../Authentication';

const Register: FunctionComponent = () => (
  <Authentication
    component={RegisterComponent}
    mutation={{ definition: SIGN_UP_MUTATION, root: 'signUp' }}
  />
);

export default Register;
