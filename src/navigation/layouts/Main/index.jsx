import React from 'react'
import LayoutNavigator from '../LayoutNavigator'

const MainLayout = () => {
  return (
    <LayoutNavigator
      layout='/main'
      defaultPath='/dashboard'
    />
  )
}

export default MainLayout
