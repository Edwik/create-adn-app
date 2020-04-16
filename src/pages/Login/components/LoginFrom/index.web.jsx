import React,{ useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { View, ImageBackground, Dimensions, StyleSheet, TouchableWithoutFeedback, Keyboard, StatusBar, TouchableOpacity } from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ImageComponent from './../../../../components/Image';
import Input from './../../../../components/Input';
import Buttom from './../../../../components/Button';
import Txt from './../../../../components/Txt';
import Assets from './../../../../../assets/export';
import Fluid from "react-native-fluid-transitions";
import { LinearGradient } from 'expo-linear-gradient';
StatusBar.setBarStyle('light-content');
let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.86

const styles = StyleSheet.create({
  active: { backgroundColor: 'black', width: SCREEN_WIDTH/1.45, height: SCREEN_HEIGHT },
  inactive: { backgroundColor: 'black', width: SCREEN_WIDTH/1, height: SCREEN_HEIGHT },
});

export default function LoginForm(props) {
  const { loading, error, message, onLogin } = props

  const [active, setActive]     = useState(false);
  const [email, setEmail]       = useState('eanaya@edgelogistics.com');
  const [password, setPassword] = useState('Edge2019#1');

  useEffect( ()=>{
    setActive(true)

  },[])

  const onPressLogin = (e) => {
    if(!email || !password) return;

    onLogin({
      email, password
    })
    
  }

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
    <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH/3.25, justifyContent: 'center', alignItems: 'center'}}>

     <View style={{width: '85%'}}>
      <Input name={'email'} type={'email'} icon={'User'} placeholder={'Enter your Email'} value={email} onChange={(name, newValue) => setEmail(newValue) } />
        <Input name={'password'} icon={'Security'} placeholder={'Enter your Password'} value={password} onChange={(name, newValue) => setPassword(newValue) } />
        
        <Buttom title={'Log In'} loading={loading} onPress={onPressLogin}/>
        
        <TouchableOpacity style={{alignItems: 'center', marginTop: 40}}>
          <Txt Key={'resetPassword'} text={'Reset password'} />
        </TouchableOpacity>
     </View>

    </View>
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <LinearGradient
          colors={['#000', '#000', '#fff', '#fff', '#fff']}
          style={{
            display: 'flex',
            flex: 1
          }}
      > */}
      {/* <KeyboardAwareScrollView> */}
      <View style={{flexDirection: 'row'}}>
        {HeaderElement}

        <View style={{backgroundColor: 'white', alignItems: 'center'}}>
            
          {FormElement}

        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
      {/* </LinearGradient> */}

    </TouchableWithoutFeedback>
  )
}

LoginForm.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  onLogin: PropTypes.func.isRequired
}

LoginForm.defaultProps = {
  loading: false,
  error: false,
  message: '',
  onLogin: () => {}
}