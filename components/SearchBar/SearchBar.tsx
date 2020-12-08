import React from "react"
import { TextField, InputAdornment, makeStyles } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles({
  input: {
    width: "100%",
  },
})

interface SearchBarProps {
  value?: string
  onChange?: any
  className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  className,
}) => {
  const classes = useStyles()

  return (
    <div className={`${className}`}>
      <TextField
        className={classes.input}
        label="Search for repos..."
        type="search"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
