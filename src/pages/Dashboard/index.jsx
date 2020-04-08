import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import withRequestHandler from '../../hoc/withRequestHandler'
import DashboardTemplate from './components/templates/Dashboard'

const Dashboard = (props) => {
  const { 
    loading,
    setLoading,
    error,
    setError,
    responseHandler
  } = props

  return (
    <View>
      <DashboardTemplate />
    </View>
  )
}

const mapStateToProps = (state, props) => {
  return {}
}

export default withRequestHandler (
  connect(
    mapStateToProps,
    {}
  )(Dashboard)
)
