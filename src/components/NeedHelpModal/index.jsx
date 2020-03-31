import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Modalize } from 'react-native-modalize'
import PropTypes from 'prop-types'

import Txt from '../Txt'
import Icon from '../Icons'

export default function NeedHelpModal (props) {
  const { open } = props

  useEffect(() => {
    if (open) {
      const modal = modalRef.current
      if (modal) {
        modal.open()
      }
    }
  }, [open])

  return (
    <Modalize
      adjustToContentHeight
      ref={modalRef}
    >
      <View>
        <Txt
          Key='needHelpModalTitle'
          text='Need Help?'
          identity='h1'
        />
        <Txt
          Key='needHelpModalSubtitle'
          text='Please contact us at'
          isCapitalize={false}
        />
        <View>
          <Icon
            name='Email'
            height='20'
            style={styles.icons}
          />
          <Txt
            Key='needHelpModalEmail'
            text='support@edgelogistics.com'
            isCapitalize={false}
          />
        </View>
        <View>
          <Icon
            name='Phone'
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
    </Modalize>
  )
}

const styles = StyleSheet.create({
  container: {},
  icons: {
    width: 20,
    heigth: 20
  }
})

NeedHelpModal.propTypes = {
  open: PropTypes.bool
}

ButtonComponent.defaultProps = {
  open: false
}
