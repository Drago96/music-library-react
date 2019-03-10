import React, { ComponentType, FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from 'react-apollo-hooks';

import { GET_AUTH_STATE_QUERY } from '../apollo/queries/auth/get-auth-state';

interface RouterProps extends RouteComponentProps<null> {}

const withAuthenticatedRoute = <P extends {}>(
  InputComponent: ComponentType<P>
) => {
  type AuthenticatedComponentProps = P & RouterProps;

  const AuthenticatedComponent: FunctionComponent<
    AuthenticatedComponentProps
  > = props => {
    const { history, location } = props;

    const { data } = useQuery(GET_AUTH_STATE_QUERY);

    const isAuthenticated = data.isAuthenticated;

    useEffect(
      () => history.replace(`/login?redirectUrl=${location.pathname}`),
      [isAuthenticated]
    );

    return isAuthenticated ? <InputComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuthenticatedRoute;
