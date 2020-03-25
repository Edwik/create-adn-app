import React from 'react'
import { connect } from 'react-redux';

import withRequestHandler from '../../hoc/withRequestHandler'

import ExampleListTemplate from './components/templates/ExampleList';

const Example = (props) => {

  return (
    <ExampleListTemplate />
  )
}

const mapStateToprops = (state, props) => {
  return {
    USERS: state.userReducers.users
  }
}


export default withRequestHandler(
  connect(
    mapStateToprops,
    {}
  )(Example)
)