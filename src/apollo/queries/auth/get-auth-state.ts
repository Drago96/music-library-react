import gql from 'graphql-tag';

export const GET_AUTH_STATE_QUERY = gql`
  query GetAuthState {
    isAuthenticated @client
  }
`;
