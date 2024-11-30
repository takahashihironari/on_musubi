import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql", // GraphQL エンドポイント
    headers: {
      "apollo-require-preflight": "true", // CSRF 保護を通過するためのヘッダー
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
