import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducers from '../pages/exportReducers'
import sagas from '../pages/exportSagas'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Combine reducers
const reducersCombined = combineReducers(reducers)

// Create store
const store = createStore(
  reducersCombined,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Running the sagas
sagas.forEach(saga =>{
  sagaMiddleware.run(saga)
})

export default store
