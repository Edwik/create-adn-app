import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'

export default function QuickNumbers(props) {
  const {
    quickNumbers
  } = props

  return (
    <View style={styles.container}></View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10
  }
})

QuickNumbers.propTypes = {
  quickNumbers: PropTypes.array.isRequired
}

QuickNumbers.defaultProps = {
  quickNumbers: []
}
