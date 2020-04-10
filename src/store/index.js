import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import reducers from '../pages/exportReducers'
import sagas from '../pages/exportSagas'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Combine reducers
const reducersCombined = combineReducers(reducers)

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['themeReducer']
}

// Persist reducer
const persistedReducers = persistReducer(persistConfig, reducersCombined)

// Create store
const store = createStore(
  // reducersCombined,
  persistedReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Running the sagas
sagas.forEach(saga => {
  sagaMiddleware.run(saga)
})
export default store
export const persistor = persistStore(store)
