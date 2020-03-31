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
  const { name, value, onChange, icon, placeholder } = props 

  const id = useId();

  return(
    <View style={styles.container}>
      {icon
        ? <Icon
          name={icon}
          height='20'
          width='20'
          style={styles.icon}
        />
        : null}
      <TextInput
        id={id}
        onChangeText={text => onChange(name, text)}
        value={value}
        style={[
          props.style,
          styles.input,
          {
            marginLeft: icon ? 60 : 25
          }
        ]}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon:{
    position: 'absolute',
    left: 20
  },
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eaedf4',
    borderStyle: 'solid',
    borderRadius: 4
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: 16
  }
});
