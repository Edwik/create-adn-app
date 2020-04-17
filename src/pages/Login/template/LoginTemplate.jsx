import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types'

import LoginForm from './../components/LoginFrom';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
let WIDTH = SCREEN_WIDTH*0.9

export default function LoginTemplate(props) {
  const { loading, error, message, onLogin } = props

  return (
    <View style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}>
      <LoginForm
        loading={loading}
        error={error}
        message={message}
        onLogin={onLogin}/>
    </View>
  );
}

LoginTemplate.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  onLogin: PropTypes.func
}

LoginTemplate.defaultProps = {
  loading: false,
  error: false,
  message: '',
  onLogin: () => {}
}