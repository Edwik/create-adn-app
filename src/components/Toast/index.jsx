import React, { useRef, useEffect } from 'react'
import { Platform } from 'react-native'
import { connect } from 'react-redux'
import Toast, { DURATION } from 'react-native-easy-toast'

const ToastContainer = (props) => {
  const { TOAST_DATA } = props
  const toastRef = useRef(null)

  useEffect(() => {
    if(TOAST_DATA && TOAST_DATA.message && toastRef && toastRef.current) {
      toastRef.current.show (
        TOAST_DATA.message,
        DURATION.LENGTH_LONG
      )
    }
  }, [TOAST_DATA])

  return Platform.OS !== 'web'
    ? (
      <Toast
        ref={toastRef}
        style={TOAST_DATA && TOAST_DATA.style ? TOAST_DATA.style : null}
      />
    )
    : null
}

const mapStateToProps = (state, props) => {
  return {
    TOAST_DATA: state.toastReducers.toastData
  }
}

export default connect(
  mapStateToProps,
  {}
)(ToastContainer)