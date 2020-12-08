import React, { useEffect, useState } from "react"
import { Typography, CircularProgress } from "@material-ui/core"
import { useQuery } from "@apollo/react-hooks"
import { SEARCH_FOR_REPOS } from "../../Queries/queries"
import Repository from "../Repository/Repository"

interface RepositoryListProps {
  searchTerm?: string
}

const RepositoryList: React.FC<RepositoryListProps> = ({ searchTerm }) => {
  const [expandedRepo, setExpandedRepo] = useState(null)
  const { data, loading, error } = useQuery(SEARCH_FOR_REPOS, {
    variables: { search_term: searchTerm },
  })

  useEffect(() => {
    setExpandedRepo(null)
  }, [data])

  if (loading) {
    return (
      <div className="flex justify-around mt-4">
        <CircularProgress />
      </div>
    )
  }

  if (error) {
    return (
      <Typography
        variant={"overline"}
        className="mt-4 text-center"
        component={"div"}
        color={"error"}
      >
        {error}
      </Typography>
    )
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={"overline"}
        className="mt-4 text-center"
        component={"div"}
      >
        There are no such repositories!
      </Typography>
    )
  }

  return (
    <div>
      {data.search.edges.map((repo: any, i: string | number | any) => (
        <Repository
          repo={repo}
          expanded={expandedRepo === i}
          onToggled={() => setExpandedRepo(i)}
          key={i}
        />
      ))}
    </div>
  )
}

export default RepositoryList
