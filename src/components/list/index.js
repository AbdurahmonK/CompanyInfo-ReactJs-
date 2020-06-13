import React from 'react'
import { useListStyles } from './style'
import { ListItem } from '../list-item'
import { Context } from '../../Context'
import { Pagination } from '../pagination'
import MYList from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'

export function List() {
  const classes = useListStyles()
  const { companies, loadCompanies } = React.useContext(Context)
  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <Pagination  data={companies} onChangeData={loadCompanies} />
        </Paper>
        <MYList>
            {companies.map(company => (
              <ListItem company={company} key={company.id} />
            ))}
        </MYList>
    </div>
  )
}
