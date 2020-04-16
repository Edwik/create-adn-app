import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../../components/Txt'
import PreferredLanes from '../../PreferredLanes'
import QuickNumbers from '../../QuickNumbers'
import Calendar from '../../Calendar'
import { isSmallDevice } from '../../../../../tools/platform'

export default function DashboardTemplate(props) {
  const {
    lanes,
    quickNumbers,
    events,
    loadingQuickNumbers
  } = props

  return (
    <View style={styles.container}>
      <View style={styles.lanesAndNumbersContainer}>
        <PreferredLanes
          lanes={lanes}
        />
        <QuickNumbers
          loading={loadingQuickNumbers}
          quickNumbers={quickNumbers}
        />
      </View>
      <View style={styles.eventsContainer}>
        <Calendar
          events={events}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: isSmallDevice() ? 'column' : 'row'
  },
  lanesAndNumbersContainer: {
    flex: isSmallDevice() ? 0 : 3
  },
  eventsContainer: {
    flex: isSmallDevice() ? 0 : 2
  }
})  

DashboardTemplate.propTypes = {
  lanes: PropTypes.array.isRequired,
  quickNumbers: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  loadingQuickNumbers: PropTypes.bool
}

DashboardTemplate.defaultProps = {
  lanes: [],
  quickNumbers: {},
  events: [],
  loadingQuickNumbers: false
}
