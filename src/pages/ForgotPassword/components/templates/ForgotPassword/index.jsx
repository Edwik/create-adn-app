import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import ForgotPasswordForm from './../../ForgotPasswordForm'

export default function ForgotPasswordTemplate (props) {
  const { loading, onForgotPassword } = props

  return (
    <View>
      <ForgotPasswordForm
        onForgotPassword={onForgotPassword}
        loading={loading}
      />
    </View>
  )
}

ForgotPasswordTemplate.propTypes = {
  loading: PropTypes.bool,
  onForgotPassword: PropTypes.func
}

ForgotPasswordTemplate.defaultProps = {
  loading: false,
  onForgotPassword: () => {}
}
