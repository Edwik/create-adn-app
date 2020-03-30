import React from 'react'
import { connect } from 'react-redux'

import withRequestHandler from '../../hoc/withRequestHandler'
import ForgotPasswordTemplate from './components/templates/ForgotPassword'

import { SendForgotPasswordEmail } from './actions/user.actions'

const ForgotPassword = (props) => {
  return <ForgotPasswordTemplate/>
}

const mapStateToProps = (state, props) => {
  return {
    FORGOT_PASSWORD_EMAIL_RESPONSE: state.forgotPasswordReducers.sendForgotPasswordEmailResponse
  }
}

export default withRequestHandler(
  connect(
    mapStateToProps,
    {
      SendForgotPasswordEmail
    }
  )(ForgotPassword)
)
