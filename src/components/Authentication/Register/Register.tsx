import React, { FunctionComponent, Fragment, memo } from 'react';

import Authentication from '../Authentication';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';

interface OwnProps {
  onSubmit: (values: { email: string; password: string }) => Promise<any>;
}

const Register: FunctionComponent<OwnProps> = memo(({ onSubmit }) => (
  <Authentication
    title="Register"
    components={{
      form: () => (
        <AuthenticationForm
          onSubmit={onSubmit}
          button={{ text: 'Register' }}
          includeFields={{ confirmPassword: true }}
        />
      ),
      actions: () => <Fragment />
    }}
  />
));

export default Register;
