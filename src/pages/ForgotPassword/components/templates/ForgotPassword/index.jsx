import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'

import ForgotPasswordForm from './../../ForgotPasswordForm'
import AuthHeader from '../../../../../components/AuthHeader'

export default function ForgotPasswordTemplate (props) {
  const {
    loading,
    error,
    message,
    onForgotPassword
  } = props

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AuthHeader/>
        </View>
        <View>
          <ForgotPasswordForm
            loading={loading}
            error={error}
            message={message}
            onForgotPassword={onForgotPassword}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: '100%'
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    maxWidth: 325
  },
  header: {
    position: 'absolute',
    top: 50,
    width: '100%'
  }
})

ForgotPasswordTemplate.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  onForgotPassword: PropTypes.func
}

ForgotPasswordTemplate.defaultProps = {
  loading: false,
  error: false,
  message: '',
  onForgotPassword: () => {}
}
