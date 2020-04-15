import React, { useState, useEffect } from 'react'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import InputComponent from '../Input'
import SelectInputOptionsModal from '../SelectInputOptionsModal'

export default function SelectInput(props) {
  const {
    name,
    selected,
    keyProp,
    nameProp,
    onChange,
    icon,
    options,
    placeholder,
    multiselect,
    loading,
    filterAsync
  } = props
  const [openSelectModal, setOpenSelectModal] = useState(false)

  const onCloseSelectModal = (newSelected) => {
    setOpenSelectModal(false)
    onChange(newSelected)
  }

  const getInputValue = () => {
    if (multiselect) {
      return selected.map(option => option[nameProp]).join(', ')
    } else {
      return selected[nameProp]
    }
  }

  return (
    <React.Fragment>
      <InputComponent
        name={name}
        value={getInputValue()}
        icon={icon}
        placeholder={placeholder}
        onFocus={() => setOpenSelectModal(true)}
        readonly
      />
      <SelectInputOptionsModal
        selected={selected}
        open={openSelectModal}
        placeholder={placeholder}
        options={options}
        keyProp={keyProp}
        nameProp={nameProp}
        onClose={onCloseSelectModal}
        multiselect={multiselect}
        loading={loading}
        filterAsync={filterAsync}
      />
    </React.Fragment>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.any,
  keyProp: PropTypes.string,
  nameProp: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.array,
  style: ViewPropTypes.style,
  onChange: PropTypes.func,
  multiselect: PropTypes.bool,
  loading: PropTypes.bool,
  filterAsync: PropTypes.func
}

SelectInput.defaultProps = {
  name: '',
  selected: {},
  keyProp: '',
  nameProp: '',
  placeholder: '',
  icon: '',
  options: [],
  style: null,
  onChange: () => {},
  multiselect: false,
  loading: false,
  filterAsync: null
}
