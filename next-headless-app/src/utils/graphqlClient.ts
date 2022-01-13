import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(
  'http://localhost:4502/content/_cq_graphql/actoolminimal/endpoint.json',
  {
    headers: {
      authorization: 'Basic YWRtaW46YWRtaW4=',
    },
  }
);
