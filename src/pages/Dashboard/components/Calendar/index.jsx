import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'
import Theme from '../../../../tools/Theme'

export default function Calendar (props) {
  const {
    events
  } = props

  return (
    <View style={styles.container}>
      <Txt
        Key='dashboardCalendarTitle'
        text='Calendar'
        identity='body2'
        isCapitalize={false}
        style={styles.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginLeft: 20
  },
  title: {
    fontSize: 11,
    color: Theme.SECONDARY_DARK_3
  }
})

Calendar.propTypes = {
  events: PropTypes.array.isRequired
}

Calendar.defaultProps = {
  events: []
}
