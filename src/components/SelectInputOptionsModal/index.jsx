import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Card, Badge, Input } from 'react-native-elements'
import PropTypes from 'prop-types'

import Txt from '../Txt'
import Icon from '../Icons'
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
  const [selectedOptions, setSelectedOptions] = useState(selected)
  const [filteredOptions, setFilteredOptions] = useState(options)

  useEffect(() => {
    if (open) {
      setFilteredOptions(options)
      if (multiselect) {
        setSelectedOptions(selected.length ? selected : [])
      } else {
        setSelectedOptions(selected)
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
      const alreadyChecked = isOptionSelected(option.item)
      if (alreadyChecked) {
        deselectOption(option.item)
      } else {
        setSelectedOptions([
          ...selectedOptions,
          option.item
        ])
      }
    } else {
      onCloseModal(option.item)
    }
  }

  const onCloseModal = (item) => {
    onClose(item || selectedOptions)
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
    setSelectedOptions(selectedOptions.filter(item => item[keyProp] !== option[keyProp])) 
  }

  const isOptionSelected = (option) => Boolean(
    selectedOptions.filter(item => item[keyProp] === option[keyProp]).length
  )

  const RenderOption = (option) => {
    const currentOption = option.item
    const optionChecked = isOptionSelected(option.item)
    return (
      <TouchableOpacity onPress={() => onSelectOption(option)}>
        <View style={styles.option}>
          <Txt
            avoid
            text={currentOption[nameProp]}
          />
          {multiselect ? <CheckBox
            onPress={() => onSelectOption(option)}
            checked={optionChecked}
          /> : null}
        </View>
      </TouchableOpacity>
    )
  }

  const MultiselectedOptions = () => (
    <View style={styles.multiselectedContainer}>
      {selectedOptions.map((option, key) => (
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
        <View horizontal style={styles.inputContainer}>
          <TouchableOpacity onPress={() => onCloseModal()}>
            <Icon
              name='LeftArrow'
              height='20'
              width='20'
              style={styles.inputIcon}
            />
          </TouchableOpacity>
          <ScrollView
            horizontal
            contentContainerStyle={styles.inputScrollViewContainer}
            showsHorizontalScrollIndicator={false}
          >
            {multiselect
              ? <MultiselectedOptions />
              : null}
            <Input
              value={inputValue}
              placeholder={placeholder}
              inputContainerStyle={styles.elementsInputContainer}
              inputStyle={styles.elementsInput}
              onChangeText={text => onInputChange('', text)}
          />
          </ScrollView>
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
    margin: 10,
    marginBottom: 50
  },
  inputContainer: {
    height: 60,
    paddingLeft: 20,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: Theme().NORMAL_COLOR,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputScrollViewContainer: {
    flexDirection: 'row',
    overflow: 'scroll',
    alignItems: 'center'
  },
  inputIcon: {
    marginRight: 10
  },
  elementsInputContainer: {
    borderBottomWidth: 0
  },
  elementsInput: {
    minWidth: 40
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
    backgroundColor: Theme().NORMAL_COLOR
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
