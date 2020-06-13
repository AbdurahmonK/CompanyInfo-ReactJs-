import React from 'react'
import { api } from './api'

export const Context = React.createContext()

export function Provider({ children }) {
    
    const [ page, setPage ] = React.useState(0)
    const [ pageSize, setPageSize ] = React.useState(5)
    const [ loading, setLoading ] = React.useState(false)
    const [ nextPage, setNextPage ] = React.useState([''])
    const [ companies, setCompanies ] = React.useState([])
    // const [ news, setNews ] = React.useState([])

    function loadCompanies(pageId = '', backwards = false) {
        setLoading(true)
        api(`companies?next_page=${pageId}&page_size=${pageSize}`)
        .then(res => {
            if (backwards) {
                setNextPage(nextPage.slice(0, -1))
            } else {
                setNextPage([...nextPage, res.next_page])
            }
            setCompanies(res.companies)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    // function loadNews(pageId = '', backwards = false) {
    //     setLoading(true)
    //     api(`companies/news?next_page=${pageId}&page_size=${pageSize}`)
    //     .then(res => {
    //         if (backwards) {
    //             setNextPage(nextPage.slice(0, -1))
    //         } else {
    //             setNextPage([...nextPage, res.next_page])
    //         }
    //         setNews(res.news)
    //         // console.log(res.news)
    //         setLoading(false)
    //     })
    //     .catch(err => console.log(err))
    // }
    

    React.useEffect(() => {
        loadCompanies(nextPage[nextPage.length -2])
        return () => {}
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // React.useEffect(() => {
    //     loadNews(nextPage[nextPage.length -2])
    //     return () => {}
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    React.useEffect(() => {
        loadCompanies(nextPage[nextPage.length - 2])
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSize]) 
    
    // React.useEffect(() => {
    //     loadNews(nextPage[nextPage.length - 2])
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [pageSize]) 

    const state = {
        page,
        // news,
        // setNews,
        setPage,
        loading,
        pageSize,
        nextPage,
        // loadNews,
        companies,
        setPageSize,
        setNextPage,
        loadCompanies,
    }
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
