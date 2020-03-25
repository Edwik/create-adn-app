import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { getReducers, getSagas } from './storeContent'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Combine reducers
const reducersCombined = combineReducers(getReducers())

// Create store
const store = createStore(
  reducersCombined,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Running the sagas
getSagas().forEach(saga =>{
  sagaMiddleware.run(saga)
})

export default store
