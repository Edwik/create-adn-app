import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types'

import Txt from '../../../../components/Txt'
import Identity from '../../../../utils/Identity'
import Theme from '../../../../tools/Theme'

export default function QuickNumberCard (props) {
  const {
    title,
    number,
    color
  } = props

  return (
    <View style={[
      styles.container,
      Identity.Shadow.Main
    ]}>
      <Card
        containerStyle={[
          styles.card,
          {
            backgroundColor: Theme[color]
          }
        ]}
      >
        <Txt
          avoid
          text={number.toString()}
          identity='h1'
          isCapitalize={false}
          style={styles.text}
          color='TEXT_AND_ICONS'
        />
        <Txt
          avoid
          text={title}
          identity='body2'
          isCapitalize={false}
          style={styles.text}
          color='TEXT_AND_ICONS'
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 75
  },
  card: {
    borderRadius: 4,
    margin: 0,
    padding: 9,
    width: '100%'
  },
  text: {
    textAlign: 'center'
  }
})

QuickNumberCard.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

QuickNumberCard.defaultProps = {
  title: '',
  number: 0,
  color: ''
}
