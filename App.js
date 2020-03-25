import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'

import AppNavigator from './src/navigation/AppNavigator'

export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    Font.loadAsync({

      'roboto-thin': require('./assets/fonts/Roboto/Roboto-Thin.otf'),
      'roboto-light': require('./assets/fonts/Roboto/Roboto-Light.otf'),
      'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.otf'),
      'roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.otf'),
      'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.otf'),
      'roboto-black': require('./assets/fonts/Roboto/Roboto-Black.otf')

    }).then(()=>{
      setLoading(false)

    }).catch((error)=>{
      console.error('Error: ', error)

    })
    setLoading(false)

  },[])

  useEffect(()=>{
    setLoading(false)

  },[Font.isLoaded])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      { loading ? <ActivityIndicator/> : <AppNavigator/> }
    </View>
    
  );
}