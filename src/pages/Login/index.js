import React from 'react'
import { SafeAreaView, Dimensions } from 'react-native'

import LoginTemplate from './components/template/LoginTemplate'
let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default function Login() {

  return (
    <SafeAreaView style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH }}>
      <LoginTemplate/>
    </SafeAreaView>
  );
}