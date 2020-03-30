import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Modalize } from 'react-native-modalize'
import PropTypes from 'prop-types'

export default function NeedHelpModal (props) {
  const { open } = props

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
    >
      ...your content
    </Modalize>
  )
}

const styles = StyleSheet.create({
  container: {}
})

NeedHelpModal.propTypes = {
  open: PropTypes.bool
}

ButtonComponent.defaultProps = {
  open: false
}
