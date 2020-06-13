import React from 'react'
import { Context } from '../../Context'
import TablePagination from '@material-ui/core/TablePagination'
import LinearProgress from '@material-ui/core/LinearProgress'

export function Pagination({ data, onChangeData }) {
  const { 
      page,
      setPage,
      loading,
      nextPage,
      pageSize,
      setPageSize,
      setNextPage,   
  } = React.useContext(Context)
  
  
  const handleChangePage = (_event, newPage) => {
    let backwards = false
    let pageId = nextPage[nextPage.length - 1] || ''

    if (page >= newPage) {
      backwards = true
      pageId = nextPage[nextPage.length - 3] || ''
    } 
    
    onChangeData(pageId, backwards)
      if (data.length <= pageSize) {
        setPage(newPage)
      }
    }


  const handleChangeRowsPerPage = event => {
    setPage(0)
    setNextPage([''])
    setPageSize(event.target.value)
  }

  return (
        <>
          <TablePagination
            page={page}
            component="div"
            rowsPerPage={pageSize}
            rowsPerPageOptions={[5, 10]}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelDisplayedRows ={({ from, to}) => `${from} - ${to}`}
            count={data.length === pageSize 
                ? Number.MAX_VALUE 
                : (nextPage.length - 2) * pageSize + data.length
            }
          />
          {loading  && <LinearProgress />}
        </> 
  )
}