import React, { useRef, useEffect } from 'react'
import { Modalize } from 'react-native-modalize'
import { StyleSheet, View } from 'react-native'

export default function ModalizeMobile (props) {
  const { open, children, onClose } = props
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
