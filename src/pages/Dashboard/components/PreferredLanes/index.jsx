import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'
import Theme from '../../../../tools/Theme'
import LaneCard from '../LaneCard'
import IconButton from '../../../../components/IconButton'

export default function PreferredLanes (props) {
  const {
    lanes
  } = props

  return (
    <View style={styles.container}>
      <Txt
        Key='dashboardPrederredLanesTitle'
        text='Preferred Lanes'
        identity='subtitle'
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
      <View style={styles.addButtonContainet}>
        <IconButton
          icon='Plus'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  title: {
    fontSize: 11,
    marginBottom: 10,
    color: Theme.SECONDARY_DARK_3
  },
  addButtonContainet: {
    marginLeft: 20,
    transform: [
      {
        translateY: -20
      }
    ]
  }
})

PreferredLanes.propTypes = {
  lanes: PropTypes.array.isRequired
}

PreferredLanes.defaultProps = {
  lanes: []
}
