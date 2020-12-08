import React, { useState } from "react"
import { Typography, Container, makeStyles } from "@material-ui/core"
import SearchBar from "../components/SearchBar/SearchBar"
import RepositoryList from "../components/RepositoryList/RepositoryList"
import Head from "next/head"

const useStyles = makeStyles({
  title: {
    marginTop: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
})

const App = () => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState<string>("")
  return (
    <>
      <Head>
        <title>GraphQL Github Client</title>
      </Head>
      <Container maxWidth={"sm"}>
        <div className="mt-10 mb-5">
          <Typography variant={"h3"} className={classes.title}>
            GraphQL Github Client
          </Typography>
        </div>

        <SearchBar
          className="mb-10"
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <RepositoryList searchTerm={searchTerm} />
      </Container>
    </>
  )
}

export default App
