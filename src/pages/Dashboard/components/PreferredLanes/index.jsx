import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'
import LaneCard from '../LaneCard'
import IconButton from '../../../../components/IconButton'
import AddLaneModal from '../../../../components/AddLaneModal'

export default function PreferredLanes (props) {
  const {
    lanes
  } = props

  const [openAddLaneModal, setOpenAddLaneModal] = useState(false)

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Txt
          Key='dashboardPrederredLanesTitle'
          text='Preferred Lanes'
          identity='body2'
          isCapitalize={false}
          style={styles.title}
          color='SECONDARY_DARK_3'
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
            onPress={() => setOpenAddLaneModal(true)}
          />
        </View>
      </View>
      <AddLaneModal
        open={openAddLaneModal}
        onClose={() => setOpenAddLaneModal(false)}
      />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {
    marginBottom: 10,
    fontWeight: 'normal'
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
