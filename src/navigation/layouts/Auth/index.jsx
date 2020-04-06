import React from 'react'
import LayoutNavigator from '../LayoutNavigator'

const AuthLayout = () => {
  return (
    <LayoutNavigator
      layout='/auth'
      defaultPath='/auth/login'
    />
  )
}

export default AuthLayout
