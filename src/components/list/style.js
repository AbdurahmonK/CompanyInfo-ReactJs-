import { makeStyles } from '@material-ui/core/styles'
import { theme as myTheme } from '../../theme'

export const useListStyles = makeStyles(theme => ({
  root: {
    width: myTheme.pageWidth,
    marginLeft: myTheme.pageOffset,
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
}))