import React,{ useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native'
import { useId } from "react-id-generator";
import Icon from '../Icons';
import Txt from './../Txt'
import './style.css'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function InputComponent(props) { 

  const [value, setValue] = useState('')
  const id = useId();

  return(
    <View style={styles.container}>
      <Icon name="User" height="24" width="24" color='red' style={styles.icon}/>
      <TextInput
        id={id}
        onChangeText={text => setValue(text)}
        value={value}
        style={{...props.style}, styles.input}
        placeholder='Enter your email'
      />
      <Txt text={'Text Prueba 1'} avoid={true}/>
      <Txt text={'Text Prueba 2'}/>
      <Txt text={'Text Prueba 3'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  icon:{
    marginHorizontal: 25
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eaedf4',
    borderStyle: 'solid',
    borderRadius: 4
  },
  input: {
    outline: 'none',
    width: '100%',
    height: '100%',
    fontSize: 16,
    paddingLeft: 10
    
  }
});
