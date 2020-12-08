import { useQuery } from "@apollo/react-hooks"
import {
  CircularProgress,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core"
import React from "react"
import { GET_REPO_ISSUES } from "../../Queries/queries"
import Issue from "../Issue/Issue"

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
})

interface IssueListProps {
  repoName: string
  repoOwner: string
}

const IssueList: React.FC<IssueListProps> = ({ repoName, repoOwner }) => {
  const classes = useStyles()
  const { data, loading, error } = useQuery(GET_REPO_ISSUES, {
    variables: {
      name: repoName,
      owner: repoOwner,
    },
  })

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    )
  }

  if (error) {
    return (
      <Typography variant={"overline"} component={"div"} color={"error"}>
        {error}
      </Typography>
    )
  }

  if (!data.repository.issues.nodes.length) {
    return (
      <Typography variant={"overline"} component={"div"}>
        There are no issues!
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
      <Typography variant={"h5"}>Latest issues: </Typography>

      <List>
        {data.repository.issues.nodes.map(
          (issue: {
            title: string
            bodyHTML: any
            author: { login: string; avatarUrl: string }
          }): any => (
            <>
              <div className="flex flex-row">
                <img
                  src={issue.author.avatarUrl}
                  alt="pic"
                  className="w-10 h-10 justify-center items-center mt-1"
                />
                <Issue
                  title={issue.title}
                  bodyHTML={issue.bodyHTML}
                  author={issue.author}
                />
              </div>
            </>
          )
        )}
      </List>
    </div>
  )
}

export default IssueList
