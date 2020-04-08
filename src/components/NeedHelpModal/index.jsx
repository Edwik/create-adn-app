import React from 'react'
import { View, StyleSheet, Linking, TouchableOpacity, Platform } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../Txt'
import Icon from '../Icons'
import DividerComponent from '../Divider'
import Modalize from '../Modalize'
import { isMobileDevice } from '../../tools/platform'

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

  const Title = () => {
    return isMobileDevice()
      ? <Txt
        avoid
        style={styles.text}
        Key='needHelpModalTitle'
        text='Need Help?'
        identity='subtitleBold'
        isCapitalize={false}
      />
      : null
  }

  return (
    <Modalize
      open={open}
      adjustToContentHeight
      onClose={onClose}
      title='Need Help?'
      action='Close'
      onAction={onClose}
      modalize
    >
      <View style={styles.content}>
        <Title />
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
    </Modalize>
  )
}

const styles = StyleSheet.create({
  content: {
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