import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import withRequestHandler from '../../hoc/withRequestHandler'
import Txt from '../../components/Txt'

const Loads = (props) => {
  const { 
    loading,
    setLoading,
    error,
    setError,
    responseHandler
  } = props

  return (
    <View>
      <Txt
        avoid
        text='Loads'
        identity='h1'
      />
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
  )(Loads)
)
