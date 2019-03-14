import React, { ComponentType, FunctionComponent, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
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

    const isAnonymous = !data.isAuthenticated;

    useEffect(() => {
      if (!isAnonymous) {
        const redirectUrlQuery = queryString.parse(location.search).redirectUrl;

        const redirectUrl =
          redirectUrlQuery instanceof Array
            ? head(redirectUrlQuery)
            : redirectUrlQuery;

        history.replace(redirectUrl || '/');
      }
    }, [isAnonymous, history, location]);

    return isAnonymous ? <InputComponent {...props} /> : null;
  };

  return withRouter(AnonymousComponent);
};

export default withAnonymousRoute;
