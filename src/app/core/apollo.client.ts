import 'isomorphic-fetch';

import { ApolloClient, NetworkInterface, createNetworkInterface } from 'apollo-client';


const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/PHRESHR'
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o['id'],
});
export function provideClient(): ApolloClient {
  return client;
}
