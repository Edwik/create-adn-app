import React, { useState } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Assets from './../../../../../assets/export'
import InputComponent from './../../../../components/Input'
import ButtonComponent from '../../../../components/Button'
import Txt from '../../../../components/Txt'

export default function ForgotPasswordForm(props) {
  const {
    loading,
    error,
    message,
    onForgotPassword
  } = props
  const [email, setEmail] = useState('')

  const onPressForgotPassword = (e) => {
    if (email) {
      onForgotPassword({
        email
      })
    }
  }

  return(
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        source={Assets.logo}
        style={styles.icon}
      />

      <Txt
        style={styles.subtitle}
        Key='forgotPasswordSubtitle1'
        text='Please enter your email address.'
        isCapitalize={false}
        identity='subtitle'
      />
      <Txt
        style={styles.subtitle}
        Key='forgotPasswordSubtitle2'
        text='We will send you an email to reset your password.'
        isCapitalize={false}
        identity='subtitle'
      />

      <View style={styles.inputContainer}>
        <InputComponent
          icon='User'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(name, newValue) => setEmail(newValue)}
          type='email'
        />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonComponent
          title='Send Email'
          loading={loading}
          onPress={onPressForgotPassword}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
		alignItems: 'center'
  },
  subtitle: {
    textAlign: 'center'
  },
  icon:{
    width: 250,
    height: 60,
    marginBottom: 60
  },
  inputContainer:{
    marginTop: 40,
    width: '100%'
  },
  buttonContainer: {
    marginTop: 70,
    width: '100%'
  }
})

ForgotPasswordForm.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  onForgotPassword: PropTypes.func.isRequired
}

ForgotPasswordForm.defaultProps = {
  loading: false,
  error: false,
  message: '',
  onForgotPassword: () => {}
}
