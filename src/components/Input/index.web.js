import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, ViewPropTypes, View } from 'react-native'
import { TextField, FormControl, FormHelperText } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useId } from 'react-id-generator'

import { Patterns } from '../../utils/Values/Patterns'
import Icon from '../Icons'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

import './style.css'

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
    <FormControl
      className='Input-component-container'
      error={Boolean(error)}
    >
      <TextField
        error={Boolean(error)}
        variant='outlined'
        onChange={e => onChange(name, e.target.value)}
        InputProps={{
          placeholder: placeholder,
          value: value,
          className: 'Input-component',
          startAdornment: icon
            ? (<View style={styles.icon}>
              <Icon
                name={icon}
                height='20'
                width='20'
              />
            </View>)
            : null
        }}
      />
      {Boolean(error)
        ? <FormHelperText>{error}</FormHelperText>
        : null}
    </FormControl>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    marginLeft: 6
  }
})

InputComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  style: ViewPropTypes.style,
  onChange: PropTypes.func,
  type: PropTypes.string // email | name | phone | number | numberId | alphanumeric
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
