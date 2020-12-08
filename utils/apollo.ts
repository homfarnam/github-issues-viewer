// import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-boost"
import withApollo from "next-with-apollo"
// import withApollo from "next-with-apollo"
// import { createHttpLink } from "apollo-link-http"
// // import fetch from "isomorphic-unfetch"

// // Update the GraphQL endpoint to any instance of GraphQL that you like
// // const GRAPHQL_URL = "http://cms.farnamh.ir:1337"

// export const httpLink = createHttpLink({
//   uri: "https://api.github.com/graphql",
//   headers: {
//     authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
//   },
// })

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
// export default withApollo(
//   // You can get headers and ctx (context) from the callback params
//   // e.g. ({ headers, ctx, initialState })
//   ({ initialState }) =>
//     new ApolloClient({
//       link: httpLink,
//       cache: new InMemoryCache()
//         //  rehydrate the cache using the initial data passed from the server:
//         .restore(initialState || {}),
//     })
// )

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer 40df9572cd27f11672eeb1f87bea192b397cc3fa",
  },
})

export default client

// export default withApollo(
//   // You can get headers and ctx (context) from the callback params
//   // e.g. ({ headers, ctx, initialState })
//   ({ initialState }) =>
//     new ApolloClient({
//       link: httpLink,
//       cache: new InMemoryCache()
//         //  rehydrate the cache using the initial data passed from the server:
//         .restore(initialState || {}),
//     })
// )
