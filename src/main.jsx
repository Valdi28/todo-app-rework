import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.scss'
import SideBar from './components/sidebar/sidebar'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import Main from './components/main/main'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id='main-div'>

          <SideBar />
          <Main />
        </div>
      </Provider>
    )
  }
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)