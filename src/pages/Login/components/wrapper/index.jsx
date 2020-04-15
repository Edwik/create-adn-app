import React,{ useEffect, useState } from 'react';
import { View, ImageBackground, Dimensions, StyleSheet, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ImageComponent from './../../../../components/Image';
import Input from './../../../../components/Input';
import Assets from './../../../../../assets/export';
import Fluid from "react-native-fluid-transitions";
import { LinearGradient } from 'expo-linear-gradient';
StatusBar.setBarStyle('light-content');
let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

const styles = StyleSheet.create({
  active: { backgroundColor: 'black', width: SCREEN_WIDTH, height: SCREEN_HEIGHT/1.6 },
  inactive: { backgroundColor: 'black', width: SCREEN_WIDTH, height: SCREEN_HEIGHT/1 },
});

export default function Wrapper(props) {

  const [active, setActive] = useState(false);
  useEffect( ()=>{
    setActive(true)
  },[])
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const HeaderElement = (
    <Fluid.View style={active ? styles.active : styles.inactive}>
      <View style={{flex: 1}}>
        <ImageBackground source={Assets.particles} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: 65, width: SCREEN_WIDTH}}>
            <ImageComponent name={'logoLight'}/>
          </View>
        </ImageBackground>
      </View>
    </Fluid.View>
  )

  const FormElement = (
    <View>
      <Input type={'email'} icon={'User'} placeholder={'Enter your Email'}/>
      <Input type={'alphanumeric'} icon={'Security'} placeholder={'Enter your Email'}/>
    </View>
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
          colors={['#000', '#000', '#fff', '#fff', '#fff']}
          style={{
            display: 'flex',
            flex: 1
          }}
      >
      <KeyboardAwareScrollView>
      <View>
        {HeaderElement}

        <View style={{backgroundColor: 'white', width: SCREEN_WIDTH}}>
            
          {FormElement}

        </View>
      </View>
      </KeyboardAwareScrollView>
      </LinearGradient>

    </TouchableWithoutFeedback>
  )
}