import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import Txt from '../Txt'
import Modal from '../Modal'
import { connect } from 'react-redux'

const ErrorModal = (props) => {
  const [open, setOpen] = useState(false)

  const { GENERAL_ERROR_DATA } = props

  useEffect(() => {
    if(GENERAL_ERROR_DATA && GENERAL_ERROR_DATA.message) {
      setOpen(true)
    }
  }, [GENERAL_ERROR_DATA])

  return (
    <Modal
      open={open}
      adjustToContentHeight
      onClose={() => setOpen(false)}
      title='Error'
      action='Close'
      onAction={() => setOpen(false)}
      isCornerModal
    >
      <View style={styles.content}>
        <Txt
          avoid
          style={styles.text}
          Key='errorModalDescription'
          text={GENERAL_ERROR_DATA.message}
          identity='subtitle'
          isCapitalize={false}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 10
  }
})

const mapStateToProps = (state, props) => {
  return {
    GENERAL_ERROR_DATA: state.errorReducers.generalErrorData
  }
}

export default connect(
  mapStateToProps,
  {}
)(ErrorModal)
