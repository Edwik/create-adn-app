import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

import { isMobileDevice } from '../../../tools/platform'
import LayoutNavigator from '../LayoutNavigator'
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Pages from '../../../pages/exportPages'
import { ScrollView } from 'react-native-gesture-handler'

const MainLayout = (props) => {
  const LayoutContainer = (props) => {
    return Platform.OS === 'web'
      ? <React.Fragment {...props} />
      : <KeyboardAvoidingView {...props} />
  }
  const [ currentPage, setCurrentPage ] = useState({})
  useEffect(() => {
    if (props.location.pathname !== '/') {
      setCurrentPage(Pages.find(page => 
        page.layout === '/main' && props.location.pathname.includes(page.path)
      ))
    }
  }, [props.location.pathname])

  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Topbar title={currentPage.name} />
        <ScrollView>
          <LayoutNavigator
            layout='/main'
            defaultPath='/main/dashboard'
          />
        </ScrollView>
      </SafeAreaView>
      <Navbar {...props} />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: isMobileDevice() ? 0 : 75,
    marginBottom: 66
  }
})

export default MainLayout
