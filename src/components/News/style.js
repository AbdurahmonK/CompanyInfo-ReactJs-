import { makeStyles } from '@material-ui/core/styles'
import { theme as myTheme } from '../../theme'

export const useNewsStyles = makeStyles(theme => ({
  root: {
    width: myTheme.pageWidth,
    marginLeft: myTheme.pageOffset,
    marginTop: 20,
    padding: 30,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
      textDecoration: 'none',
      color: 'unset',
  },
  space: {
      height: 20,
  },
  row: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
          marginRight: 16,
      },
  },
}))