/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { api } from '../../api'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useInfoStyles } from './style'


export function Info() {
    const history = useHistory()
    const classes = useInfoStyles()
    const { state } = useLocation()
    const [ info, setInfo ] = React.useState(null)

    React.useEffect(() => {
        api(`companies/${state}`, true)
            .then(res => {
                 setInfo(res)
            })
            .catch(err => console.log(err))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return info ? (
        <Paper className={classes.root}>
            <Typography variant="h3">{info.name}</Typography>
            <div className={classes.row}>
                <Typography variant="overline">{info.ticker}</Typography>
                <Typography variant="overline">{info.business_phone_no}</Typography>
                <a href={`https://${info.company_url}`} target='_blank'>
                    <Typography variant="overline">{info.company_url}</Typography>
                </a>
            </div>
            <div className={classes.space}/>
            <Typography variant="h6">CEO: {info.ceo}</Typography>
            <Typography variant="h6">SECTOR: {info.sector || info.industry_category || 'N/A'}</Typography>
            <Typography variant="h6">ADDRESS: {info.hq_country} {info.hq_state} {info.business_address} </Typography>
            <div className={classes.space}/>
            <Typography variant="body1">{info.short_description || info.long_description}</Typography>
            <div className={classes.space}/>
            <div className={classes.row}>
                <Link to={{ pathname: '/news', state: state }} className={classes.newsButton}> 
                    {console.log(state)}
                    <Button variant="contained" color="primary">Company News</Button>
                </Link>
                <Button variant="contained" onClick={history.goBack}>Go Back</Button>
            </div>
        </Paper>
    ) : <LinearProgress color='secondary' />
}