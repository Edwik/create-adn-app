import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'
import Theme from '../../../../tools/Theme'

export default function PreferredLanes (props) {
  const {
    lanes
  } = props

  return (
    <View style={styles.container}>
      <Txt
        Key='dashboardPrederredLanesTitle'
        text='Preferred Lanes'
        identity='body2'
        isCapitalize={false}
        style={styles.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    color: Theme.SECONDARY_DARK_3
  }
})

PreferredLanes.propTypes = {
  lanes: PropTypes.array.isRequired
}

PreferredLanes.defaultProps = {
  lanes: []
}
