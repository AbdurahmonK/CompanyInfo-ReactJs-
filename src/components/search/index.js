import React from 'react'
import { useSearchStyles } from './style'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

export function Search() {
  const classes = useSearchStyles()
  
  function handleChange(e) {
    console.log(e.target.value)
    // let sValue = e.target.value
  }
  return (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ }}
                onKeyPress={handleChange}
              />
          </div>
  )
}
