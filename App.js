import { AppLoading } from 'expo'
import React, { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './src/navigation/AppNavigator'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { ElementsThemeProvider } from './src/providers/ElementsThemeProvider'

import ToastComponent from './src/components/Toast'
import ErrorModal from './src/components/ErrorModal'
import { EvergreenThemeProvider } from './src/providers/EvergreenThemeProvider'

export default function App () {
  const [loading, setLoading] = useState(true)

  const loadFonts = async () => {
    await Font.loadAsync({

      'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),

      'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
      'poppins-medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf')

    }).then(() => {
      setLoading(false)
    }).catch((error) => {
      console.error('Error: ', error)
      setLoading(false)
    })
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator/>} persistor={persistor}>
        <ElementsThemeProvider>
          <EvergreenThemeProvider>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              { loading ? (
                <AppLoading
                  startAsync={loadFonts}
                  onError={() => console.log('error loading page')}
                  onFinish={() => setLoading(false)}
                />
              ) : <AppNavigator/> }
            </View>
            <ToastComponent />
            <ErrorModal />
          </EvergreenThemeProvider>
        </ElementsThemeProvider>
      </PersistGate>
    </Provider>
  )
}

console.disableYellowBox = true
