import React, { useRef, useEffect } from 'react'
import { Modalize } from 'react-native-modalize'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

export default function ModalizeMobile (props) {
  const {
    open,
    fullView,
    children,
    onClose
  } = props
  const modalRef = useRef(null)

  useEffect(() => {
    if (open) {
      const modal = modalRef.current
      if (modal) {
        modal.open()
      } 
    }
  }, [open])

  return (
    <Modalize
      adjustToContentHeight
      ref={modalRef}
      onClosed={onClose}
    >
      <View style={styles.container}>
        {children}
      </View>
    </Modalize>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  }
})

ModalizeMobile.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.element.isRequired,
  fullView: PropTypes.bool,
  onClose: PropTypes.func
}

ModalizeMobile.defaultProps = {
  open: false,
  children: '',
  fullView: false,
  onClose: () => {}
}
