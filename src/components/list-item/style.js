import { makeStyles } from '@material-ui/styles'

export const useListItemStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: '#3f51b5'
    },
    link: {
        textDecoration: 'none',
        color: 'unset',
    },
}))