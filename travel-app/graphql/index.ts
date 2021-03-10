import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export * from "./graphql-hooks";
