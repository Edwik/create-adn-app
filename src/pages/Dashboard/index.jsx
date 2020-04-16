import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import withRequestHandler from '../../hoc/withRequestHandler'
import DashboardTemplate from './components/templates/Dashboard'
import { FetchQuickNumbers } from './actions/dashboard.actions'

const Dashboard = (props) => {
  const { 
    loading,
    setLoading,
    error,
    setError,
    responseHandler,
    initRequest,
    FetchQuickNumbers,
    QUICK_NUMBERS
  } = props

  const lanes = [
    {
      "lane_id": "lnkwn71584664111682",
      "carrier_id": "EDGEROIL",
      "originState": "AL",
      "originCity": "Abbeville",
      "stopsCount": "",
      "destState": "AL",
      "destCity": "Auburn",
      "maxWeight": "",
      "distance": "",
      "equipmentType": ""
    },
    {
      "lane_id": "lnez9f1582052890754",
      "carrier_id": "EDGEROIL",
      "originState": "CA",
      "originCity": "California",
      "stopsCount": "",
      "destState": "NY",
      "destCity": "New York",
      "maxWeight": "",
      "distance": "",
      "equipmentType": ""
    },
    {
      "lane_id": "lnhqjf1582554145606",
      "carrier_id": "EDGEROIL",
      "originState": "CA",
      "originCity": "Los Angeles",
      "stopsCount": "",
      "destState": "FL",
      "destCity": "Miami",
      "maxWeight": "",
      "distance": "",
      "equipmentType": ""
    },
  ]
  const [loadingQuickNumbers, setLoadingQuickNumbers] = useState(false)

  initRequest(() => {
    setLoadingQuickNumbers(true)
    FetchQuickNumbers()
  })

  const onSuccessQuickNumbers = () => {
    setLoadingQuickNumbers(false)
  }

  const onFailQuickNumbers = () => {
    setLoadingQuickNumbers(false)
  }

  responseHandler(QUICK_NUMBERS, onSuccessQuickNumbers, onFailQuickNumbers)

  return (
    <View>
      <DashboardTemplate
        lanes={lanes}
        loadingQuickNumbers={loadingQuickNumbers}
        quickNumbers={QUICK_NUMBERS.status === 200
          ? QUICK_NUMBERS.res.data
          : {}
        }
      />
    </View>
  )
}

const mapStateToProps = (state, props) => {
  return {
    QUICK_NUMBERS: state.dashboardReducers.quickNumbers
  }
}

export default withRequestHandler (
  connect(
    mapStateToProps,
    {
      FetchQuickNumbers
    }
  )(Dashboard)
)
