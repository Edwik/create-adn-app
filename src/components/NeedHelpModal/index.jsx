import React from 'react'
import { View, StyleSheet, Linking, TouchableOpacity, Platform } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../Txt'
import Icon from '../Icons'
import DividerComponent from '../Divider'
import Modal from '../Modal'

export default function NeedHelpModal (props) {
  const { open, onClose } = props

  const contactPhoneNumber = '3123194766'
  const contactEmail = 'support@edgelogistics.com'

  const callPhone = () => {
    Linking.openURL(`tel:${contactPhoneNumber}`)
  }

  const sendEmail = () => {
    Linking.openURL(`mailto:${contactEmail}`)
  }

  return (
    <Modal
      open={open}
      adjustToContentHeight
      onClose={onClose}
      maxWidth={'xs'}
    >
      <View style={styles.content}>
        <Txt
          avoid
          style={styles.text}
          Key='needHelpModalTitle'
          text='Need Help?'
          identity='subtitleBold'
          isCapitalize={false}
        />
        <Txt
          avoid
          style={styles.text}
          Key='needHelpModalSubtitle'
          text='Please contact us at'
          identity='subtitle'
          isCapitalize={false}
        />
        <TouchableOpacity
          onPress={sendEmail}
          style={styles.contactContainer}
        >
          <Icon
            name='Email'
            width='20'
            height='20'
            style={styles.icons}
          />
          <Txt
            avoid
            Key='needHelpModalEmail'
            text={contactEmail}
            isCapitalize={false}
          />
        </TouchableOpacity>
        <DividerComponent containerStyle={styles.divider} />
        <TouchableOpacity
          onPress={callPhone}
          style={styles.contactContainer}
        >
          <Icon
            name='Phone'
            width='20'
            height='20'
            style={styles.icons}
          />
          <Txt
            avoid
            Key='needHelpModalPhone'
            text={contactPhoneNumber}
            isCapitalize={false}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: 30
  },
  text: {
    marginBottom: 10
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 0
  },
  icons: {
    marginRight: 20
  },
  divider: {
    marginVertical: 5
  }
})

NeedHelpModal.propTypes = {
  open: PropTypes.bool
}

NeedHelpModal.defaultProps = {
  open: false
}
