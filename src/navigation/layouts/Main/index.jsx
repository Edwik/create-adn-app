import React from 'react'
import LayoutNavigator from '../LayoutNavigator'
import Navbar from '../../../components/Navbar'
import Txt from '../../../components/Txt'
import { SafeAreaView, StyleSheet } from 'react-native'

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
    flex: 1
  }
})

export default MainLayout
