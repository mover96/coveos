import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { cove } from './reducers/cove'
import { Main } from './components/Main'

const store = createStore(cove)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
