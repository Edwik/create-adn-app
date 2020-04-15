import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Modalize from '../Modalize'

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
    <Modalize
      open
      fullView
    >
    </Modalize>
  )
}

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
