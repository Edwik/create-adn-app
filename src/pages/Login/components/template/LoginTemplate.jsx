import React from 'react';
import { View, Dimensions } from 'react-native';

import Wrapper from './../wrapper';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function LoginTemplate(props) {

  return (
    <View style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}>
      <Wrapper/>
    </View>
  );
}