import React from 'react'
import { Dialog } from '@material-ui/core';

export default function ModalWeb (props) {
  const { open, children, onClose, maxWidth } = props

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth || 'sm'}
      fullWidth
    >
      {children}
    </Dialog>
  )
}
