import React from 'react'
import LayoutNavigator from '../LayoutNavigator'
import Navbar from '../../../components/Navbar'

import { SafeAreaView, StyleSheet } from 'react-native'
import { isMobileDevice } from '../../../tools/platform'

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeAreaContainer}>
        <LayoutNavigator
          layout='/main'
          defaultPath='/dashboard'
        />
      </SafeAreaView>
      <Navbar {...props} />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: isMobileDevice() ? 0 : 75
  }
})

export default MainLayout
