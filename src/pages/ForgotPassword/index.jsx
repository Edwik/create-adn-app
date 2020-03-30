import React from 'react'
import { connect } from 'react-redux'

import withRequestHandler from '../../hoc/withRequestHandler'
import ForgotPasswordTemplate from './components/templates/ForgotPassword'

const ForgotPassword = (props) => {
  return <ForgotPasswordTemplate/>
}

const mapStateToProps = (state, props) => {
  return {}
}

export default withRequestHandler(
  connect(
    mapStateToProps,
    {}
  )(ForgotPassword)
)
