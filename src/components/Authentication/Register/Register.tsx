import React, { FunctionComponent, memo } from 'react';

import Authentication from '../Authentication';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import { Typography } from '@material-ui/core';
import { Link } from '../../UI/Link/Link';

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
      actions: () => (
        <Typography align="center" gutterBottom={true}>
          Already have an account?{' '}
          <Link to="/login" color={'secondary'}>
            Click here to sign in.
          </Link>
        </Typography>
      )
    }}
  />
));

export default Register;
