import React from 'react'
import { View, Text, ScrollView, Dimensions, Button } from 'react-native'

import { THEMES } from './../../../../utils/themes'
let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

let WIDTH = SCREEN_WIDTH*0.9

export default function LoginTemplate(props) {

  const FormComponent = (props) => {
    return(
      <View style={{ width: WIDTH, backgroundColor: THEMES.FRAME_THEME.PRIMARY_COLOR, maxWidth: 400, alignItems: 'center', paddingVertical: 20, paddingHorizontal: 20 }}>
        
        <View style={{ backgroundColor: THEMES.FRAME_THEME.ACCENT_COLOR, width: '100%', justifyContent: 'center', alignItems: 'center', height: 60, marginBottom: 8 }}>
          <Text style={{color: THEMES.FRAME_THEME.TEXT_AND_ICONS}}>Title</Text>
        </View>

        <View style={{ backgroundColor: THEMES.FRAME_THEME.ACCENT_COLOR, width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 8 }}>
          <Text>Email input</Text>
        </View>

        <View style={{ backgroundColor: THEMES.FRAME_THEME.ACCENT_COLOR, width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 8 }}>
          <Text>Password</Text>
        </View>

        <View style={{ backgroundColor: THEMES.FRAME_THEME.ACCENT_COLOR, width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 8 }}>
          <Text> Remember me! </Text>
        </View>

        <View style={{ backgroundColor: THEMES.FRAME_THEME.ACCENT_COLOR, width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 8 }}>
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