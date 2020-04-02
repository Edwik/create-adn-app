import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, ViewPropTypes } from 'react-native'
import { Input } from 'react-native-elements'
import PropTypes from 'prop-types'
import { useId } from 'react-id-generator'
import Icon from '../Icons'
import Theme from '../../tools/Theme'
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
    type
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

  return (
    <Input
      id={id}
      value={value}
      placeholder={placeholder}
      errorMessage={error}
      errorStyle={styles.error}
      containerStyle={styles.container}
      inputStyle={[
        styles.input
      ]}
      inputContainerStyle={[
        styles.inputContainer,
        {
          borderColor: error
          ? Theme.PRIMARY_COLOR
          : Theme.SECONDARY_TEXT
        }
      ]}
      leftIconContainerStyle= {styles.icon}
      leftIcon={
        icon
          ? <Icon
            name={icon}
            height='20'
            width='20'
          />
          : null
      }
      onChangeText={text => onChange(name, text)}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    marginLeft: 20
  },
  container: {
    paddingHorizontal: 0,
    height: 85
  },
  inputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    height: 60
  },
  input: {
    fontSize: 16
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
  type: 'email' || 'name' || 'phone' || 'number' || 'numberId' || 'alphanumeric'
}

InputComponent.defaultProps = {
  name: '',
  value: '',
  placeholder: '',
  icon: '',
  style: null,
  onChange: () => {},
  type: null
}
