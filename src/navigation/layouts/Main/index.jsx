import React from 'react'
import LayoutNavigator from '../LayoutNavigator'
import Navbar from '../../../components/Navbar'

import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { isMobileDevice } from '../../../tools/platform'

const MainLayout = (props) => {
  const LayoutContainer = (props) => {
    return Platform.OS === 'web'
      ? <React.Fragment {...props} />
      : <KeyboardAvoidingView {...props} />
  }
  return (
    <LayoutContainer>
      <SafeAreaView style={styles.safeAreaContainer}>
        <LayoutNavigator
          layout='/main'
          defaultPath='/dashboard'
        />
      </SafeAreaView>
      <Navbar {...props} />
    </LayoutContainer>
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
