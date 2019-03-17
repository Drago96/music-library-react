import React, { FunctionComponent, Fragment, memo } from 'react';

import Authentication from '../Authentication';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';

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
      actions: () => <Fragment />
    }}
  />
));

export default Login;
