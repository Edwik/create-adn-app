import React from 'react'
import LayoutNavigator from '../LayoutNavigator'

const AccountLayout = () => {
  return (
    <LayoutNavigator
      layout='/account'
      defaultPath='/account/profile'
    />
  )
}

export default AccountLayout
