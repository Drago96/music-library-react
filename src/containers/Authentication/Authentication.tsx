import React, { FunctionComponent, useCallback, ComponentType } from 'react';

import { useMutation } from '../../hooks/useMutation';

import { AUTH_TOKEN } from '../../config/constants';

interface AuthenticationComponentProps {
  onSubmit: (values: { email: string; password: string }) => Promise<any>;
}

interface OwnProps {
  mutation: {
    definition: any;
    root: string;
  };
  component: ComponentType<AuthenticationComponentProps>;
}

const Authentication: FunctionComponent<OwnProps> = ({
  mutation,
  component
}) => {
  const [authenticationMutation] = useMutation(mutation.definition, {
    update: useCallback(
      cache => cache.writeData({ data: { isAuthenticated: true } }),
      []
    ),
    onCompleted: useCallback(
      data => localStorage.setItem(AUTH_TOKEN, data[mutation.root].token),
      []
    )
  });

  const onSubmit = useCallback(
    ({ email, password }: { email: string; password: string }) =>
      authenticationMutation({ variables: { email, password } }),
    []
  );

  const AuthenticationComponent = component;

  return <AuthenticationComponent onSubmit={onSubmit} />;
};

export default Authentication;
