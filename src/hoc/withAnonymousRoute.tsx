import React, { ComponentType, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import { useQuery } from 'react-apollo-hooks';
import { head } from 'lodash';

import { GET_AUTH_STATE_QUERY } from '../apollo/queries/auth/get-auth-state';

interface RouterProps extends RouteComponentProps<null> {}

const withAnonymousRoute = <P extends {}>(InputComponent: ComponentType<P>) => {
  type AnonymousComponentProps = P & RouterProps;

  const AnonymousComponent: FunctionComponent<
    AnonymousComponentProps
  > = props => {
    const { history, location } = props;

    const { data } = useQuery(GET_AUTH_STATE_QUERY);

    const redirectToUrl = () => {
      const redirectUrlQuery = queryString.parse(location.search).redirectUrl;

      const redirectUrl =
        redirectUrlQuery instanceof Array
          ? head(redirectUrlQuery)
          : redirectUrlQuery;

      history.replace(redirectUrl || '/');
    };

    if (data.isAuthenticated) {
      redirectToUrl();

      return null;
    }

    return <InputComponent {...props} />;
  };

  return AnonymousComponent;
};

export default withAnonymousRoute;