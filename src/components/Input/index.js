import React,{ useState } from 'react'
import { StyleSheet, View, Dimensions, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { useId } from 'react-id-generator';
import Icon from '../Icons';

import './style.css'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function InputComponent(props) { 

  const { name, value, onChange, icon } = props

  const id = useId();

  return(
    <View style={styles.container}>
      {icon
        ? <Icon
          name={icon}
          height='20'
          style={styles.icon}
        />
        : null}
      <TextInput
        id={id}
        onChangeText={text => onChange(name, text)}
        value={value}
        style={{...props.style}, styles.input}
        placeholder={props.placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon:{
    marginHorizontal: 25
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
})

InputComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.instanceOf(styles.container),
  onChange: PropTypes.func
}

InputComponent.defaultProps = {
  name: '',
  value: '',
  placeholder: '',
  icon: '',
  style: null,
  onChange: () => {}
}
