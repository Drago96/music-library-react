import React, { ComponentType, FunctionComponent, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
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

    useEffect(() => {
      if (!isAuthenticated) {
        history.replace(`/login?redirectUrl=${location.pathname}`);
      }
    }, [isAuthenticated, history, location]);

    return isAuthenticated ? <InputComponent {...props} /> : null;
  };

  return withRouter(AuthenticatedComponent);
};

export default withAuthenticatedRoute;
