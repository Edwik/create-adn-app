import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Dialog, CornerDialog } from 'evergreen-ui'

import Txt from '../Txt'
import Icon from '../Icons'
import ButtonComponent from '../Button'

export default function ModalWeb (props) {
  const {
    open,
    children,
    title,
    action,
    onAction,
    onClose,
    isCornerModal
  } = props

  const DialogComponent  = (props) => {
    return isCornerModal
      ? <CornerDialog {...props} />
      : <Dialog {...props} />
  }

  return (
    <DialogComponent
      isShown={open}
      onCloseComplete={onClose}
      hasFooter={false}
      hasHeader={false}
      containerProps={{
        style: {
          margin: 'auto'
        }
      }}
      title={title}
    >
      <View style={styles.container}>
      {!isCornerModal ? <View style={styles.header}>
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
        </View> : null}
        {children}
        <View style={styles.footer}>
          <ButtonComponent
            title={action}
            onPress={onAction}
          />
        </View>
      </View>
    </DialogComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
