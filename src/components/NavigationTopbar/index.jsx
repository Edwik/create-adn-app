import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Icon from '../Icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function NavigationTopbar(props) {
  const { onGoBack } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onGoBack}>
        <Icon
          name='LeftArrow'
          width='18'
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10
  }
})

NavigationTopbar.propTypes = {
  onGoBack: PropTypes.func
}

NavigationTopbar.defaultProps = {
  onGoBack: () => {}
}
