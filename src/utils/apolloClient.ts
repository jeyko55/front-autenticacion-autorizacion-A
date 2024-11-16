import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://codefact.udea.edu.co/modulo-01/graphql', // URL de tu API de Spring Boot
  cache: new InMemoryCache(),
});

export default client;
