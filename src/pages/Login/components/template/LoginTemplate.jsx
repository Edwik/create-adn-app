import React from 'react'
import { View, Text, ScrollView, Dimensions, Button } from 'react-native'

import Image from './../../../../components/Image'
import InputComponent from './../../../../components/Input'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function LoginTemplate(props) {

  const FormComponent = (props) => {
    return(
      <View style={{ width: WIDTH, maxWidth: 400, alignItems: 'center', paddingVertical: 20, paddingHorizontal: 20 }}>
        
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 60, marginBottom: 58 }}>
          <Image name={'logo'}/>
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 55, marginBottom: 28 }}>
          <InputComponent/>
        </View>

        <View style={{ backgroundColor: 'grey', width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 28 }}>
          <Text>Password</Text>
        </View>

        <View style={{ backgroundColor: 'grey', width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 28 }}>
          <Text> Remember me! </Text>
        </View>

        <View style={{ backgroundColor: 'grey', width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 28 }}>
          <Text> Button </Text>
        </View>

      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, justifyContent: 'center', alignItems: 'center'}}>
        <FormComponent/>
      </View>
    </ScrollView>
  );
}