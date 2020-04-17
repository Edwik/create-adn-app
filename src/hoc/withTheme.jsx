import React from 'react'
import { useSelector } from 'react-redux'

const withThemeComponent = (HocComponent) => (props) => {
  const theme = useSelector(state => state.themeReducer.theme)
  return (
    <HocComponent {...props} theme={theme}/>
  )
}

export const withTheme = (Component) => withThemeComponent(Component)
