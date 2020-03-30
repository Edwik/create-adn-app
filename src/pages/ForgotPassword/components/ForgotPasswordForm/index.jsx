import React, { useState } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Assets from './../../../../../assets/export'
import InputComponent from './../../../../components/Input'
import ButtonComponent from '../../../../components/Button'

export default function ForgotPasswordForm(props) {
  const [email, setEmail] = useState('')

  return(
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        source={Assets.logo}
        style={styles.icon}
      />

      <Text style={{ textAlign:'center'}}>
        Please enter your email address.
      </Text>
      <Text style={{ textAlign:'center'}}>
        We will send you an email to reset your password.
      </Text>

      <View style={styles.inputContainer}>
        <InputComponent
          icon='User'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(name, newValue) => setEmail(newValue)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonComponent
          title='Send Email'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
		alignItems: 'center'
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
  title: PropTypes.string,
  description: PropTypes.string
}

ForgotPasswordForm.defaultProps = {
  title: 'Not Found',
  description: 'The component is not has found. If you need help pleaase contact with support.'
}
