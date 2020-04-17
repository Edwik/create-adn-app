import React from 'react';
import { Dimensions, ActivityIndicator, View } from 'react-native';
import Header from './../components/header';
// import Image from './../../../../components/Image'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function SplashTemplate(props) {

  return (
    <View style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}>
      <Header/>
    </View>
  );
}