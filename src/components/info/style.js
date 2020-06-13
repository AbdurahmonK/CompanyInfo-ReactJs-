import { makeStyles } from "@material-ui/core";
import { theme } from '../../theme'
export const useInfoStyles = makeStyles({
    root: {
        width: theme.pageWidth,
        marginLeft: theme.pageOffset,
        padding: 30,
        marginTop: 20,
        overflowY: 'scroll',
        height: '70vh',
    },
    space: {
        height: 20,
    },
    row: {
        display: 'flex',
        '& > *': {
            marginRight: 16,
        },
    },
    newsButton: {
        textDecoration: 'none',
        color: 'unset',
    }
})