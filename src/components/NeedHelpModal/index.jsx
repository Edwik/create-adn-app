import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Txt from '../Txt'
import Icon from '../Icons'
import DividerComponent from '../Divider'
import Modal from '../Modal'

export default function NeedHelpModal (props) {
  const { open, onClose } = props

  return (
    <Modal
      open={open}
      adjustToContentHeight
      onClose={onClose}
      maxWidth={'xs'}
    >
      <View style={styles.content}>
        <Txt
          style={styles.text}
          Key='needHelpModalTitle'
          text='Need Help?'
          identity='subtitleBold'
          isCapitalize={false}
        />
        <Txt
          style={styles.text}
          Key='needHelpModalSubtitle'
          text='Please contact us at'
          identity='subtitle'
          isCapitalize={false}
        />
        <View style={styles.contactContainer}>
          <Icon
            name='Email'
            width='20'
            height='20'
            style={styles.icons}
          />
          <Txt
            Key='needHelpModalEmail'
            text='support@edgelogistics.com'
            isCapitalize={false}
          />
        </View>
        <DividerComponent containerStyle={styles.divider} />
        <View style={styles.contactContainer}>
          <Icon
            name='Phone'
            width='20'
            height='20'
            style={styles.icons}
          />
          <Txt
            Key='needHelpModalPhone'
            text='312-319-4766'
            isCapitalize={false}
          />
        </View>
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
