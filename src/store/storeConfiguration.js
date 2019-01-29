import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunk]

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    global.devToolsExtension ? global.devToolsExtension() : fct => fct
  )
)
