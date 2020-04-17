import React from 'react'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

import Icon from '../Icons'
import { StyleSheet } from 'react-native'
import Theme from '../../tools/Theme'

export default function IconButton(props) {
  const {
    color,
    iconColor,
    icon,
    onPress,
    size
  } = props

  return (
    <Button
      containerStyle={{
        width: size,
        height: size
      }}
      buttonStyle={[
        styles.button,
        {
          width: size,
          height: size,
          backgroundColor: Theme()[color] || Theme().PRIMARY_TEXT
        }
      ]}
      icon={
        <Icon
          name={icon}
          width='22'
          height='22'
          fill={Theme()[iconColor] || Theme().TEXT_AND_ICONS}
        />
      }
      onPress={onPress}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100
  }
})


IconButton.propTypes = {
  color: PropTypes.string,
  iconColor: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

IconButton.defaultProps = {
  color: '',
  iconColor: '',
  size: 42,
  icon: '',
  onPress: () => {}
}
