import React from 'react'
import { Divider } from 'react-native-elements'
import { View, ViewPropTypes } from 'react-native'
import Theme from '../../tools/Theme'

export default function DividerComponent (props) {
  const { containerStyle } = props
  return (
    <View style={containerStyle}>
      <Divider style={{
        backgroundColor: Theme().DIVIDER_COLOR,
        width: '100%'
      }} />
    </View>
  )
}

DividerComponent.propTypes = {
  containerStyle: ViewPropTypes.style
}

DividerComponent.defaultProps = {
  containerStyle: {}
}
