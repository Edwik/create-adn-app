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
        containerStyle={styles.avatarContainer}
        style={styles.avatar}
        width={40}
        height={40}
        resizeMode='cover'
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
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden'
  },
  avatar: {
  }
})

Topbar.propTypes = {
  title: PropTypes.string
}

Topbar.defaultProps = {
  title: ''
}
