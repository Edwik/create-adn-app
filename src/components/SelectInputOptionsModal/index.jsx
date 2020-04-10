import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Modal, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { Card, Badge } from 'react-native-elements'
import PropTypes from 'prop-types'

import InputComponent from '../Input'
import Txt from '../Txt'
import Icon from '../Icons'
import ButtonComponent from '../Button'
import CheckBox from '../CheckBox'
import Theme from '../../tools/Theme'
import Spinner from '../Spinner'

export default function SelectInputOptionsModal(props) {
  const {
    open,
    selected,
    placeholder,
    options,
    keyProp,
    nameProp,
    onClose,
    multiselect,
    loading,
    filterAsync
  } = props
  const [inputValue, setInputValue] = useState('')
  const [newSelected, setNewSelected] = useState(selected)
  const [filteredOptions, setFilteredOptions] = useState(options)

  useEffect(() => {
    if (open) {
      setFilteredOptions(options)
      if (multiselect) {
        setNewSelected(selected.length ? selected : [])
      } else {
        setNewSelected(selected)
        setInputValue(selected[nameProp])
        filterOptions(selected[nameProp])
      }
    }
  }, [open])

  const onInputChange = (name, newValue) => {
    setInputValue(newValue)
    filterOptions(newValue)
  }

  const onSelectOption = (option) => {
    if (multiselect) {
      const alreadyChecked = newSelected.indexOf(option.item) !== -1
      if (alreadyChecked) {
        deselectOption(option.item)
      } else {
        setNewSelected([
          ...newSelected,
          option.item
        ])
      }
    } else {
      onCloseModal(option.item)
    }
  }

  const onCloseModal = (item) => {
    onClose(item || newSelected)
  }

  const filterOptions = (value) => {
    if (filterAsync) {
      filterAsync(value.toLowerCase())
    } else {
      setFilteredOptions(
        options.filter(option =>
          option[nameProp].toLowerCase().includes(value ? value.toLowerCase() : '')
        )
      )
    }
    
  }
  
  const deselectOption = (option) => {
    setNewSelected(newSelected.filter(item => item[keyProp] !== option[keyProp])) 
  }

  const RenderOption = (option) => {
    const currentOption = option.item
    const optionChecked = newSelected.indexOf(option.item) !== -1
    return (
      <TouchableOpacity onPress={() => onSelectOption(option)}>
        <View style={styles.option}>
          <Txt
            avoid
            text={currentOption[nameProp]}
          />
          {multiselect ? <TouchableOpacity onPress={() => onSelectOption(option)}>
            <CheckBox
              checked={optionChecked}
            />
          </TouchableOpacity> : null}
        </View>
      </TouchableOpacity>
    )
  }

  const MultiselectedOptions = () => (
    <View style={styles.multiselectedContainer}>
      {newSelected.map((option, key) => (
        <Badge
          key={key}
          badgeStyle={styles.multiselectedBadget}
          value={(
            <View style={styles.multiselectedOption}>
              <Txt
                avoid
                text={option[nameProp]}
                style={styles.multiselectedText}
              />
              <TouchableOpacity onPress={() => deselectOption(option)}>
                <Icon
                  name='Times'
                  width='12'
                  height='12'
                  style={styles.multiselectedIcon}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      ))}
    </View>
  )

  return (
    <Modal
      visible={open}
      onClose={() => onCloseModal()}
      style={styles.modal}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <InputComponent
            name='optionsInput'
            value={inputValue}
            onChange={onInputChange}
            placeholder={placeholder}
            icon='LeftArrow'
            onPressIcon={() => onCloseModal()}
            CustomInputHead={multiselect
              ? MultiselectedOptions
              : null}
          />
        </View>
        <View>
          <Card containerStyle={styles.optionsContainer}>
            {loading
              ? <Spinner />
              : <FlatList
                contentContainerStyle={{ flexGrow: 1 }}
                data={filteredOptions}
                renderItem={RenderOption}
                keyExtractor={item => item[keyProp]}
              />}
          </Card>
        </View>
      </SafeAreaView>
      {/* <View style={styles.buttonContainer}>
        <ButtonComponent
          title='Done'
          onPress={() => onCloseModal()}
        />
      </View> */}
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    height: '100%'
  },
  container: {
    flex: 1,
    margin: 10
  },
  optionsContainer: {
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 5
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  checkbox: {
    alignSelf: "center",
    width: 20,
    height: 20
  },
  multiselectedContainer: {
    flexDirection: 'row'
  },
  multiselectedBadget: {
    marginRight: 5,
    backgroundColor: Theme.NORMAL_COLOR
  },
  multiselectedOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5

  },
  multiselectedText: {
    fontSize: 16
  },
  multiselectedIcon: {
    margin: 5
  },
  buttonContainer: {
    margin: 20,
    alignItems: 'flex-end'
  }
})

SelectInputOptionsModal.propTypes = {
  open: PropTypes.bool,
  selected: PropTypes.any,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  keyProp: PropTypes.string,
  nameProp: PropTypes.string,
  onClose: PropTypes.func,
  multiselect: PropTypes.bool,
  loading: PropTypes.bool,
  filterAsync: PropTypes.func
}

SelectInputOptionsModal.defaultProps = {
  open: false,
  selected: {},
  placeholder: '',
  options: [],
  keyProp: '',
  nameProp: '',
  onClose: () => {},
  multiselect: false,
  loading: false,
  filterAsync: null
}
