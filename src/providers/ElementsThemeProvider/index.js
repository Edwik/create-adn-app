import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'react-native-elements'
import { withTheme } from './../../hoc/withTheme'
import Theme from './../../tools/Theme'

const ElementsThemeProviderComponet = ({ theme, children }) => {
  const newTheme = {
    colors: {
      primary: Theme(theme).PRIMARY_COLOR,
      secondary: Theme(theme).ACCENT_COLOR,
      divider: Theme(theme).DIVIDER_COLOR
    }
  }
  
  return (
    <ThemeProvider theme={newTheme}>
      <>
        {children}
      </>
    </ThemeProvider>
  )
}

export const ElementsThemeProvider = withTheme(ElementsThemeProviderComponet)
ElementsThemeProviderComponet.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string
}
