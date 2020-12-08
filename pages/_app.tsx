import { ApolloProvider } from "@apollo/react-hooks"
import Head from "next/head"
import "../styles/index.css"
import "../styles/styles.css"

import { useApollo } from "../lib/apolloClient"

function MyApp({ Component, pageProps }: any) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

// Wraps all components in the tree with the data provider
export default MyApp
