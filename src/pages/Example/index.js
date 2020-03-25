import React from 'react'
import { connect } from 'react-redux';

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


export default connect(
  mapStateToprops,
  {}
)(Example)