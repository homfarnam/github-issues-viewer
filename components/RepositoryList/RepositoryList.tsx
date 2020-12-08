import React, { useEffect, useState } from "react"
import { Typography, CircularProgress, makeStyles } from "@material-ui/core"
import { useQuery } from "@apollo/react-hooks"
import { SEARCH_FOR_REPOS } from "../../Queries/queries"
import Repository from "../Repository/Repository"

interface RepositoryListProps {
  searchTerm?: string
}
const useStyles = makeStyles({
  note: {
    marginTop: "1rem",
    textAlign: "center",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
  },
})

const RepositoryList: React.FC<RepositoryListProps> = ({ searchTerm }) => {
  const classes = useStyles()
  const [expandedRepo, setExpandedRepo] = useState(null)
  const { data, loading, error } = useQuery(SEARCH_FOR_REPOS, {
    variables: { search_term: searchTerm },
  })

  useEffect(() => {
    setExpandedRepo(null)
  }, [data])

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={"overline"}
        className={classes.note}
        component={"div"}
      >
        There are no such repositories!
      </Typography>
    )
  }

  return (
    <div>
      {data.search.edges.map(
        (
          repo: any,
          i: string | number | ((prevState: null) => null) | null | any
        ) => (
          <>
            <Repository
              repo={repo}
              expanded={expandedRepo === i}
              onToggled={() => setExpandedRepo(i)}
              key={i}
            />
          </>
        )
      )}
    </div>
  )
}

export default RepositoryList
