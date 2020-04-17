import React from 'react'
import { ViewPropTypes, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Select from 'react-select'

import Spinner from '../Spinner'
import Icon from '../Icons'

import './styles.css'

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

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      fontFamily: 'Roboto',
      fontSize: 16,
      height: 60
    }),
    control: (provided, state) => ({
      ...provided,
      border: `solid ${state.isFocused ? '2' : '1'}px #000`,
      boxShadow: 'none',
      height: '100%'
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      display: 'block',
      overflow: 'scroll',
      whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
      marginLeft: 60,
      paddingLeft: 0
    }),
    multiValue: (provided, state) => ({
      ...provided,
      display: 'inline-flex'
    }),
    input: (provided, state) => ({
      ...provided,
      display: 'inline-flex',
      minWidth: 40
    })
  }

  return (
    <View>
      <Select
        className='react-select'
        classNamePrefix='react-select'
        isLoading={loading}
        loadingMessage={Spinner}
        styles={customStyles}
        value={selected}
        placeholder={placeholder}
        onChange={onChange}
        options={loading ? [] : options}
        isMulti={multiselect}
        isSearchable
        getOptionLabel={option => option[nameProp]}
        getOptionValue={option => option[keyProp]}
        closeMenuOnSelect={!multiselect}
        onInputChange={filterAsync || null}
      />
      <View style={styles.iconContainer}>
        <Icon
          name={icon}
          height='20'
          width='20'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 20,
    left: 20
  }
})  

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
