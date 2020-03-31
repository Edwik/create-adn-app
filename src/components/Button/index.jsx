import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'

import Theme from '../../tools/Theme'

export default function ButtonComponent (props) {
  const {
    buttonStyle,
    title,
    onPress,
    type,
    loading
  } = props

  return (
    <Button
      buttonStyle={[
        buttonStyle,
        styles.button
      ]}
      titleStyle={styles.textStyle}
      type={type}
      title={title}
      loading={loading}
      onPress={onPress}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 50,
    backgroundColor: Theme.PRIMARY_TEXT
  },
  textStyle: {
    textTransform: 'capitalize',
    fontSize: 16
  }
})

ButtonComponent.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.instanceOf(styles.button),
  onPress: PropTypes.func
}

ButtonComponent.defaultProps = {
  type: 'solid',
  title: '',
  buttonStyle: null,
  loading: false,
  onPress: () => {}
}
