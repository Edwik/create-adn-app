import React, { useRef, useEffect } from 'react'
import { Modalize } from 'react-native-modalize'

export default function ModalMobile (props) {
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
      {children}
    </Modalize>
  )
}
