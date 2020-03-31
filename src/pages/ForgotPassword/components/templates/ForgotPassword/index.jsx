import React from 'react'
import { View, StyleSheet } from 'react-native'
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
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: '0',
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
