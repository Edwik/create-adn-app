import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'
import Theme from '../../../../tools/Theme'
import LaneCard from '../LaneCard'

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lanes.map((lane, key) =>
          <LaneCard
            key={key}
            lane={lane}
          />
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 11,
    marginBottom: 10,
    color: Theme.SECONDARY_DARK_3
  }
})

PreferredLanes.propTypes = {
  lanes: PropTypes.array.isRequired
}

PreferredLanes.defaultProps = {
  lanes: []
}
