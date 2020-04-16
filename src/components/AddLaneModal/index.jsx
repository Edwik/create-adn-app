import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Txt from '../Txt'
import NavigationTopbar from '../NavigationTopbar'

export default function AddLaneModal(props) {
  const {
    open,
    laneToEdit,
    onClose
  } = props
  const [lane, setLane] = useState({})

  useEffect(() => {
    if (open && laneToEdit) {
      setLane({ ...laneToEdit })
    } else {
      setLane({})
    }
  }, [open])

  return (
    <Modal
      modalContainer={styles.modalContainer}
      open={open}
      isFullView
    >
      <SafeAreaView>
        <NavigationTopbar
          onGoBack={onClose}
        />
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
})

AddLaneModal.propTypes = {
  open: PropTypes.bool,
  laneToEdit: PropTypes.object,
  onClose: PropTypes.func
}

AddLaneModal.defaultProps = {
  open: false,
  laneToEdit: null,
  onClose: () => {}
}
