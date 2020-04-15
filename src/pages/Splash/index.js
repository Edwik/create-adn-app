import React, {useEffect, useRef} from 'react'
import { SafeAreaView, Dimensions } from 'react-native'

import SplashTemplate from './templates/SplashTemplate'
let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

export default function Splash({ history }) {

  useEffect( ()=>{
    setTimeout( ()=>{
      history.push('/login')
    },2500)
  },[])

  return (
    // <SafeAreaView style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH }}>
      <SplashTemplate/>
    // </SafeAreaView>
  );
}