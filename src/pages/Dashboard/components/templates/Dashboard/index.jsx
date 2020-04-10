import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../../../../../components/Txt'
import PreferredLanes from '../../PreferredLanes'
import QuickNumbers from '../../QuickNumbers'
import Calendar from '../../Calendar'
import SelectInput from '../../../../../components/SelectInput'

export default function DashboardTemplate(props) {
  const {
    lanes,
    quickNumbers,
    events
  } = props

  const [test, setTest] = useState([])

  const onChangeTest = (selected) => {
    setTest(selected)
  }

  return (
    <View>
      <Txt
        avoid
        text='Dashboard'
        identity='h3'
        style={styles.title}
        isCapitalize={false}
      />
      <PreferredLanes
        lanes={lanes}
      />
      <SelectInput
        name='originCity'
        selected={test}
        placeholder='Origin'
        icon='DartBoard'
        keyProp='key'
        nameProp='key'
        options={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Andres'},
          {key: 'Ariel'},
          {key: 'Camilo'},
          {key: 'Cristian'},
          {key: 'Edwin'},
          {key: 'Nicolas'},
          {key: 'Gustavo'},
          {key: 'Andrea'},
          {key: 'Jimmy 2'},
          {key: 'Julie 2'},
          {key: 'Andres 2'},
          {key: 'Ariel 2'},
          {key: 'Camilo 2'},
          {key: 'Cristian 2'},
          {key: 'Edwin 2'},
          {key: 'Nicolas 2'},
          {key: 'Gustavo 2'},
          {key: 'Andrea 2'},
          {key: 'Jimmy 3'},
        ]}
        onChange={onChangeTest}
        multiselect
      />
      <QuickNumbers
        quickNumbers={quickNumbers}
      />
      <Calendar
        events={events}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 23,
		margin: 20
  }
})  

DashboardTemplate.propTypes = {
  lanes: PropTypes.array.isRequired,
  quickNumbers: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired
}

DashboardTemplate.defaultProps = {
  lanes: [],
  quickNumbers: [],
  events: []
}
