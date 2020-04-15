import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, ViewPropTypes } from 'react-native'

import Assets from './../../../assets/export'

export default function BasicPageComponent(props) {
  const {
    name,
    containerStyle,
    style,
    width,
    height
  } = props

  return(
    <View 
      style={[
        containerStyle,
        styles.container,
        {
          width,
          height
        }
      ]}
    >
      <Image
        resizeMode='contain'
        source={Assets[name]}
        style={[
          style,
          {
            width,
            height
          }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

BasicPageComponent.propTypes = {
  name:	PropTypes.string,
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style
}

BasicPageComponent.defaultProps = {
  name: 'noImage',
	containerStyle: null,
	style: null
}
