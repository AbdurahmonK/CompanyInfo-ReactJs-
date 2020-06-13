import React from 'react'
import { Provider } from './Context'
import { List } from './components/list'
import { Info } from './components/info'
import { News } from './components/News'
import { SearchReult } from './components/search-result'
import { Header } from './components/header'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Switch>
          <Route path='/' exact>
            <List />
          </Route>
          <Route path='/info'>
            <Info />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/search-result'>
            <SearchReult />
          </Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}
