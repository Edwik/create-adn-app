import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'


import ForgotPasswordForm from './../../ForgotPasswordForm'
import NeedHelpModal from '../../../../../components/NeedHelpModal'
import Icon from '../../../../../components/Icons'
import Txt from '../../../../../components/Txt'

export default function ForgotPasswordTemplate (props) {
  const {
    loading,
    error,
    message,
    onForgotPassword
  } = props
  const [openModal, setOpenModal] = useState(false)

  const navigateBack = () => {
    props.history.push('/login')
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={navigateBack}>
          <Icon
            name='LeftLongArrow'
            width='25'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenModal}>
          <Txt
            avoid
            text='Help'
            identity='subtitle'
            isCapitalize={false}
            color='SECONDARY_TEXT'
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Header/>
          </View>
          <View>
            <ForgotPasswordForm
              loading={loading}
              error={error}
              message={message}
              onForgotPassword={onForgotPassword}
            />
          </View>
        </View>
      </SafeAreaView>
      <NeedHelpModal
        open={openModal}
        onClose={handleOpenModal}
      />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: '100%'
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    maxWidth: 350
  },
  header: {
    position: 'absolute',
    top: 50,
    width: '100%',
    zIndex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerIcons: {
    width: 20,
    height: 20
  }
})

ForgotPasswordTemplate.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  onForgotPassword: PropTypes.func
}

ForgotPasswordTemplate.defaultProps = {
  loading: false,
  error: false,
  message: '',
  onForgotPassword: () => {}
}
