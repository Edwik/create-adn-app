import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../../components/Txt'
import PreferredLanes from '../../PreferredLanes'
import QuickNumbers from '../../QuickNumbers'
import Calendar from '../../Calendar'

export default function DashboardTemplate(props) {
  const {
    lanes,
    quickNumbers,
    events
  } = props

  return (
    <View>
      <Txt
        avoid
        text='Dashboard'
        identity='h3'
        style={styles.title}
        isCapitalize={false}
      />
      <PreferredLanes
        lanes={lanes}
      />
      <QuickNumbers
        quickNumbers={quickNumbers}
      />
      <Calendar
        events={events}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 23,
		margin: 20
  }
})  

DashboardTemplate.propTypes = {
  lanes: PropTypes.array.isRequired,
  quickNumbers: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired
}

DashboardTemplate.defaultProps = {
  lanes: [],
  quickNumbers: [],
  events: []
}
