import React, { FunctionComponent } from 'react';

import { useMutation } from '../../../hooks/useMutation';
import { SIGN_IN_MUTATION } from '../../../apollo/mutations/auth/sign-in';

import LoginFormComponent from '../../../components/Authentication/LoginForm/LoginForm';

import { AUTH_TOKEN } from '../../../config/constants';

const LoginForm: FunctionComponent = () => {
  const [signInMutation] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: data => localStorage.setItem(AUTH_TOKEN, data.signIn.token),
    update: cache => cache.writeData({ data: { isAuthenticated: true } })
  });

  const onSubmit = ({ email, password }: { email: string; password: string }) =>
    signInMutation({ variables: { email, password } });

  return <LoginFormComponent onSubmit={onSubmit} />;
};

export default LoginForm;
