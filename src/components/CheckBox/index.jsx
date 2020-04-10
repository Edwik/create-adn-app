import React from 'react'
import { CheckBox as NativeCheckBox } from 'react-native-elements'
import PropTypes from 'prop-types'

import Icon from '../Icons'
import Theme from '../../tools/Theme'
import { StyleSheet } from 'react-native'

export default function CheckBox(props) {
  const { checked, size } = props
  return (
    <NativeCheckBox
      containerStyle={styles.container}
      checkedIcon={
        <Icon
          name='Check'
          width={size}
          height={size}
          fill={Theme.PRIMARY_TEXT}
        />
      }
      uncheckedIcon={<React.Fragment/>}
      checked={checked}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center'
  }
})

CheckBox.propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.number
}

CheckBox.defaultProps = {
  checked: false,
  size: 10
}

