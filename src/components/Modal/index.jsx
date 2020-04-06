import React from 'react'
import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native'

import Identity from '../../utils/Identity'
import Txt from '../Txt'
import Icon from '../Icons'
import ButtonComponent from '../Button';

export default function ModalMobile (props) {
  const {
    open,
    children,
    title,
    action,
    onAction,
    onClose,
    isCornerModal
  } = props

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={open}
      onDismiss={onClose}
    >
      <View
        style={[
          styles.centeredView,
          {
            justifyContent: isCornerModal ? 'flex-end' : 'center'
          }
        ]}
      >
        <View style={[
          styles.modalView,
          Identity.Shadow.Main
        ]}>
          <View style={styles.header}>
            <Txt
              avoid
              text={title}
              identity='subtitleBold'
              isCapitalize={false}
            />
            <TouchableOpacity onPress={onClose}>
              <Icon
                name='Exit'
                width='10'
                height='10'
              />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {children}
          </View>
          <View style={styles.footer}>
            <View>
              <ButtonComponent
                title={action}
                onPress={onAction}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center'
  },
  modalView: {
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginVertical: 20
  },
  content: {
    alignSelf: 'stretch',
    marginHorizontal: 30
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginVertical: 20
  }
})
