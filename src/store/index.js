import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { Platform, AsyncStorage } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';

import reducers from '../pages/exportReducers'
import sagas from '../pages/exportSagas'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Combine reducers
const reducersCombined = combineReducers(reducers)

// Persist config
const persistConfig = {
  key: 'Eah#95/Icad!2020',
  storage: Platform.OS === 'web' ? storage : AsyncStorage,
  whitelist: ['themeReducer']
}

// Persist reducer
const persistedReducers = persistReducer(persistConfig, reducersCombined)


// Create store
const store = createStore(
  persistedReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Running the sagas
sagas.forEach(saga => {
  sagaMiddleware.run(saga)
})

let persistor = persistStore(store)
export { store, persistor }
