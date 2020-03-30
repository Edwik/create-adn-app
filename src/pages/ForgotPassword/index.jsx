import React, { useState } from 'react'
import { connect } from 'react-redux'

import withRequestHandler from '../../hoc/withRequestHandler'
import ForgotPasswordTemplate from './components/templates/ForgotPassword'

import { SendForgotPasswordEmail } from './actions/user.actions'

const ForgotPassword = (props) => {
  const { 
    loading,
    setLoading,
    error,
    setError,
    responseHandler,
    SendForgotPasswordEmail,
    FORGOT_PASSWORD_EMAIL_RESPONSE
  } = props
  const [resMessage, setResMessage] = useState('')

  const onSuccess = () => {
    setResMessage(FORGOT_PASSWORD_EMAIL_RESPONSE.res.message)
  }

  const onFail = () => {
    setResMessage(FORGOT_PASSWORD_EMAIL_RESPONSE.res)
  }

  responseHandler(FORGOT_PASSWORD_EMAIL_RESPONSE, onSuccess, onFail)

  const onForgotPassword = payload => {
    setLoading(true)
    SendForgotPasswordEmail(payload)
  }
  return (
    <ForgotPasswordTemplate
      onForgotPassword={onForgotPassword}
      loading={loading}
      error={error}
      message={resMessage}
    />
  )
}

const mapStateToProps = (state, props) => {
  return {
    FORGOT_PASSWORD_EMAIL_RESPONSE: state.forgotPasswordReducers.sendForgotPasswordEmailResponse
  }
}

export default withRequestHandler (
  connect(
    mapStateToProps,
    {
      SendForgotPasswordEmail
    }
  )(ForgotPassword)
)
