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
    <View style={[
      styles.container,
      Identity.Shadow.Main
    ]}>
      <Card containerStyle={styles.card}>
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
            numberOfLines={1}
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
            numberOfLines={1}
          />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 130,
    height: 150
  },
  card: {
    margin: 0,
    padding: 24
  },
  title: {
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
    fontFamily: 'roboto-regular',
    fontSize: 12,
  },
  destText: {
    fontFamily: 'roboto-regular',
    fontSize: 11
  }
})

LaneCard.propTypes = {
  lane: PropTypes.object.isRequired
}

LaneCard.defaultProps = {
  lane: {}
}
