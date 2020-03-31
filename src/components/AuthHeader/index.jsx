import React from 'react'
import { View, StyleSheet } from 'react-native'

import Txt from '../Txt'
import Icon from '../Icons'

export default function AuthHeader(props) {
  return (
    <View style={styles.container}>
      <Icon
        name='LeftLongArrow'
        width='25'
      />
      <Txt
        Key='authHeaderNeedHelp'
        text='Help'
        identity='subtitle'
        isCapitalize={false}
        color='SECONDARY_TEXT'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icons: {
    width: 20,
    heigth: 20
  }
})