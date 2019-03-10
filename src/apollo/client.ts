import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import { AUTH_TOKEN } from '../config/constants';

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const cache = new InMemoryCache();

const initialData = {
  isAuthenticated: localStorage.getItem(AUTH_TOKEN) !== null
};

cache.writeData({
  data: initialData
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

client.onResetStore(async () => cache.writeData({ data: initialData }));
