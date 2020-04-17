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
      <View style={styles.avatarContainer}>
      <Image
        name='defaultAvatar'
        style={styles.avatar}
        mode='cover'
      />
      </View>
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
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden'
  },
  avatar: {
    height: 40,
    width: 40,
  }
})

Topbar.propTypes = {
  title: PropTypes.string
}

Topbar.defaultProps = {
  title: ''
}
