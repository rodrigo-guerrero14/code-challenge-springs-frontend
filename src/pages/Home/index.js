import React from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Content from '../../components/Content'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'

import '../../Styles/home.css'
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function Home(){
  return(
    <main className="main">
      <Provider store={store}>
        <Header />
        <Menu/>
        <Content />
      </Provider>
    </main>
  )
}

export default Home