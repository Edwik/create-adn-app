import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Image from '../Image'
import Txt from '../Txt'

export default function Topbar(props) {
  const { title } = props

  return (
    <View style={styles.container}>
      <Txt
        avoid
        text={title}
        identity='h3'
        isCapitalize={false}
      />
      <Image
        name='defaultAvatar'
        style={styles.avatar}
        width={40}
        height={40}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10
  },
  avatar: {
    borderRadius: 50,
    resizeMode: 'cover'
  }
})

Topbar.propTypes = {
  title: PropTypes.string
}

Topbar.defaultProps = {
  title: ''
}
