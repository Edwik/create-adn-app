import React from 'react';
import { View, ImageBackground, Dimensions, ActivityIndicator, Text } from 'react-native';
import ImageComponent from './../../../../components/Image';
import Assets from './../../../../../assets/export'
let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function Header(props) {

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Assets.particles} style={{flex: 1}}>
        <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: 65, width: SCREEN_WIDTH}}>
            <ImageComponent name={'logoLight'}/>
          </View>
          <ActivityIndicator style={{marginTop: 20}} color={'#FFF'}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFF'}}>v0.0.1</Text>
        </View>
      </ImageBackground>
    </View>
  )
}