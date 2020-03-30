import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import ForgotPasswordForm from './../../ForgotPasswordForm'

export default function ForgotPasswordTemplate (props) {
  const {
    loading,
    error,
    message,
    onForgotPassword
  } = props

  return (
    <View>
      <ForgotPasswordForm
        loading={loading}
        error={error}
        message={message}
        onForgotPassword={onForgotPassword}
      />
    </View>
  )
}

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
