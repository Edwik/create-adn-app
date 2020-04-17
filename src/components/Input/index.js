import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, ViewPropTypes, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import { Input } from 'react-native-elements'
import PropTypes from 'prop-types'
import { useId } from 'react-id-generator'
import Icon from '../Icons'
import Theme from '../../tools/Theme'
import Identity from '../../utils/Identity'
import { Patterns } from '../../utils/Values/Patterns'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function InputComponent(props) { 

  const {
    name,
    value,
    onChange,
    icon,
    placeholder,
    type,
    onFocus,
    onPressIcon,
    readonly
    
  } = props

  const [error, setError] = useState('')
  const id = useId()

  useEffect(() => {
    setError(value && hasError()
      ? Patterns[type].errorMessage
      : ''
    )
  }, [value])

  const hasError = () => {
    if (type && Patterns[type]) {
      return !RegExp(Patterns[type].pattern).test(value)
    }
    return false
  }

  const IconContainer = (props) => {
    return onPressIcon
      ? <TouchableOpacity onPress={onPressIcon}>{props.children}</TouchableOpacity>
      : <View>{props.children}</View>
  }

  return (
    <TouchableOpacity onPress={onPressIcon}>
      <View>
    <Input
      id={id}
      value={value}
      placeholder={placeholder}
      errorMessage={error}
      errorStyle={[
        styles.error,
        { color: Theme().ERROR_COLOR }
      ]}
      containerStyle={styles.container}
      inputStyle={[
        styles.input,
        {
          marginLeft: icon ? 0 : 20
        }
      ]}
      inputContainerStyle={[
        styles.inputContainer,
        error
          ? Identity.Borders.Error
          : Identity.Borders.Normal
      ]}
      leftIconContainerStyle= {styles.icon}
      leftIcon={
        icon
          ? <IconContainer>
            <Icon
              name={icon}
              height='20'
              width='20'
            />
          </IconContainer>
          : null
      }
      onChangeText={text => onChange(name, text)}
      onFocus={onFocus}
      editable={!readonly}
    />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    marginLeft: 20,
  },
  container: {
    paddingHorizontal: 0,
    height: 85
  },
  inputContainer: {
    width: '100%',
    height: 60
  },
  input: {
    fontSize: 16,
    paddingRight: 20

  },
  error: {
    marginLeft: 10
  }
})

InputComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  style: ViewPropTypes.style,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onPressIcon: PropTypes.func,
  type: PropTypes.string, // email | name | phone | number | numberId | alphanumeric
  readonly: PropTypes.bool
}

InputComponent.defaultProps = {
  name: '',
  value: '',
  placeholder: '',
  icon: '',
  style: null,
  onChange: () => {},
  onFocus: () => {},
  onPressIcon: null,
  type: null,
  readonly: false
}
