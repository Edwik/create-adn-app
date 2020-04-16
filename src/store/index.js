import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { Platform, AsyncStorage } from 'react-native';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-community/async-storage';

import reducers from '../pages/exportReducers'
import sagas from '../pages/exportSagas'

const persistConfig = {
  key: 'Eah#95/Icad!2020',
  storage: Platform.OS === 'web' ? storage : AsyncStorage,
}

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Combine reducers
const reducersCombined = combineReducers(reducers)

// Reducers persistor
const persistedReducer = persistReducer(persistConfig, reducersCombined)

// Create store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Running the sagas
sagas.forEach(saga =>{
  sagaMiddleware.run(saga)
})

let persistor = persistStore(store)
export { store, persistor }
