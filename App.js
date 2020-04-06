import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'

import AppNavigator from './src/navigation/AppNavigator'
console.disableYellowBox = true;
import { Provider } from 'react-redux'
import store from './src/store'
import { ElementsTheme, MaterialUITheme } from './src/tools/Theme'
import { ThemeProvider as ElementsThemeProvider } from 'react-native-elements'
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles'

import ToastComponent from './src/components/Toast'
import ErrorModal from './src/components/ErrorModal';

export default function App() {

  const [loading, setLoading] = useState(true)

  const loadFonts = async () => {
    await Font.loadAsync({

      'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),

      'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
      'poppins-medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf')

    }).then(()=>{
      setLoading(false)

    }).catch((error)=>{
      console.error('Error: ', error)
      setLoading(false)

    })
  }

  return (
    <Provider store={store}>
      <MaterialUIThemeProvider theme={MaterialUITheme}>
        <ElementsThemeProvider theme={ElementsTheme}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            { loading ? (
              <AppLoading
                startAsync={loadFonts}
                onError={()=>console.log('error loading page')}
                onFinish={() => setLoading(false)}
              />
            ): <AppNavigator/> }
          </View>
          <ToastComponent />
          <ErrorModal />
        </ElementsThemeProvider>
      </MaterialUIThemeProvider>
    </Provider>
  );
}