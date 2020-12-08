import { useMemo } from "react"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { NormalizedCacheObject } from "apollo-cache-inmemory"

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    // ssrMode: typeof window === "undefined", // set to true for SSR
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        // authorization: "Bearer 40df9572cd27f11672eeb1f87bea192b397cc3fa",
        authorization: "Bearer e26ce892dc32fea485ff0d82ad090178c25f4233",
      },
    }),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function useApollo(initialState: null | undefined): any {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}