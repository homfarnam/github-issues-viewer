import React from "react"
import PropTypes from "prop-types"
import compose from "recompose/compose"
import cx from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import StarBorder from "@material-ui/icons/Star"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import {
  withSkeleton,
  withSkeletonProvider,
  Span,
  placeholder,
} from "../Skeleton/Skeleton"

type Loading = {
  loading: true
}

interface RepoListItemProps {
  loading: Loading | any
  classes: any
  className: any
  title: any
  description: any
  starCount: any
}

const styles = (theme): any => ({
  starCount: {
    lineHeight: "18px",
  },
})

// skeleton icon
const StarIcon = withSkeleton(StarBorder)

const formatStarCount = (value) => {
  if (!value) return null
  return value > 999 ? Number((value / 1000).toFixed(1)) + "k" : value
}

const RepoListItem: React.FC<RepoListItemProps> = ({
  classes,
  title,
  description,
  starCount,
  loading = true,
}) => (
  <ListItem className="root loading" button>
    <ListItemText
      disableTypography
      primary={
        <Typography
          className="title"
          color="primary"
          variant="subtitle1"
          noWrap
        >
          <Span>{title}</Span>
        </Typography>
      }
      secondary={
        <Typography color="textSecondary">
          <Span>{description}</Span>
        </Typography>
      }
    />
    <ListItemIcon className="listItemIcon">
      <>
        <StarIcon color="action" className="starIcon" />
        <Typography color="textSecondary" className={classes.starCount}>
          {formatStarCount(starCount)}
        </Typography>
      </>
    </ListItemIcon>
  </ListItem>
)

RepoListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  starCount: PropTypes.number,
  loading: PropTypes.bool,
}

export default compose(withStyles(styles))(RepoListItem)
