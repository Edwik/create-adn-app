import React from 'react'
import { Dimensions } from 'react-native'

import LoginTemplate from './components/template/LoginTemplate'
let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default function Login() {

  return (
    <LoginTemplate/>
  );
}