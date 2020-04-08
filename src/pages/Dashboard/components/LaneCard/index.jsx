import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'
import Icon from '../../../../components/Icons'
import Identity from '../../../../utils/Identity'

export default function LaneCard (props) {
  const {
    lane
  } = props

  return (
    <Card containerStyle={[
      styles.card,
      Identity.Shadow.Main
    ]}>
      <Txt
        avoid
        text={lane.destState}
        identity='h1'
        isCapitalize={false}
        style={styles.title}
      />
      <View style={styles.locationContainer}>
        <Icon
          name='UpArrow'
          width='10'
          height='10'
          style={styles.icon}
        />
        <Txt
          avoid
          text={`${lane.originCity}, ${lane.originState}`}
          identity='body2'
          isCapitalize={false}
          style={styles.originText}
        />
      </View>
      <View style={styles.locationContainer}>
        <Icon
          name='RightArrow'
          width='10'
          height='10'
          style={styles.icon}
        />
        <Txt
          avoid
          text={`${lane.destCity}, ${lane.destState}`}
          identity='body2'
          isCapitalize={false}
          color='SECONDARY_DARK_3'
          style={styles.destText}
        />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 0,
    marginRight: 10,
    padding: 24,
    width: 130,
    height: 150
  },
  title: {
    fontSize: 50,
    fontFamily: 'roboto-bold',
    marginBottom: 7
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 5
  },
  originText: {
    fontSize: 12,
  },
  destText: {
    fontSize: 11
  }
})

LaneCard.propTypes = {
  lane: PropTypes.object.isRequired
}

LaneCard.defaultProps = {
  lane: {}
}
