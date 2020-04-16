import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, ViewPropTypes } from 'react-native'

import Assets from './../../../assets/export'
import { StylesProvider } from '@material-ui/core'

export default function ImageComponent(props) {

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <Image resizeMode={props.mode} source={Assets[props.name]} style={{...props.style, width: '100%', height: '100%' }} />
    </View>
  )
}

ImageComponent.propTypes = {
  name:     PropTypes.string,
  style:    StylesProvider.style,
  mode:     PropTypes.string
};

ImageComponent.defaultProps = {
    name:     'noImage',
    mode:     'contain'
};
