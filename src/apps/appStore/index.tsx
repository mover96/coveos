import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Main } from './components/Main'
import { appStore } from './reducers/appStore'

const store = createStore(appStore)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
