import React from 'react'
import PropTypes from "prop-types";
import { View, Image } from 'react-native'

import Assets from './../../../assets/export'

export default function BasicPageComponent(props) {

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <Image resizeMode='contain' source={Assets[props.name]} style={{...props.style, width: '100%', height: '100%' }} />
    </View>
  )
}

BasicPageComponent.propTypes = {
  name:     PropTypes.string,
  style:    PropTypes.string
};

BasicPageComponent.defaultProps = {
    name:     'noImage'
};