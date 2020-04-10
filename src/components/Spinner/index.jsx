import React from 'react'
import { ActivityIndicator, StyleSheet, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import Theme from '../../tools/Theme'

export default function Spinner(props) {
  const { size, containerStyle } = props
  return (
    <View
      style={[
        styles.container,
        containerStyle
      ]}
    >
      <ActivityIndicator
        size={size}
        color={Theme.PRIMARY_TEXT}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 30
  }
})

Spinner.propTypes = {
  size: PropTypes.any,
  containerStyle: ViewPropTypes.style,
}

Spinner.defaultProps = {
  size: 'large',
  containerStyle: null
}
