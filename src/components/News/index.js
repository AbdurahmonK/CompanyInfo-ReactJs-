/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { api } from '../../api'
import { useNewsStyles } from './style'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { useLocation, useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'

export function News() {
  const history = useHistory()
  const classes = useNewsStyles()
  const { state } = useLocation()
  const [yangiliklar, setYangiliklar] = React.useState(null)
  React.useEffect(() => {
    api(`companies/${state}/news`, true)
      .then(res => {
        setYangiliklar(res)
      })
      .catch(err => console.log(err))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return yangiliklar ? (
    <div className={classes.root}>
       {yangiliklar.news.map(yangilik =>
          <Paper  key={yangilik.id}>
              <div className={classes.row}>
                  <Typography variant="overline">{yangilik.id}</Typography>
                  <Typography variant="overline">{yangilik.publication_date}</Typography>
                  <Typography variant="overline">{yangilik.title}</Typography>
                  <a href={`${yangilik.url}`} target='_blank'>
                      <Typography variant="overline">{yangilik.url}</Typography>
                  </a>
              </div>
              <div className={classes.space}/>
              <Typography variant="body1">{yangilik.summary}</Typography>
              <div className={classes.space}/>
          </Paper>
      
        )}
        <div className={classes.row}>
            <Button variant="contained" onClick={history.goBack}>Go Back</Button>
        </div>
    </div>
  ) : <LinearProgress color='secondary' />
}
