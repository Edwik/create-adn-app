import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { isMobileDevice } from './../../tools/platform'
import { withTheme } from './../../hoc/withTheme'
import Theme from './../../tools/Theme'

export const EvergreenThemeProviderComponent = ({ theme, children }) => {
  const [importedModule, setImportedModule] = useState(null)

  const newTheme = {
    colors: {
      primary: ''
    },
    normalBorder: {
      border: `1px solid ${Theme(theme).NORMAL_COLOR}`
    },
    activeBorder: {
      border: `1px solid ${Theme(theme).NORMAL_COLOR}`
    },
    completeBorder: {
      border: `1px solid ${Theme(theme).COMPLETE_COLOR}`
    },
    errorBorder: {
      border: `1px solid ${Theme(theme).ERROR_COLOR}`
    },
    principleShadows: {
      boxShadow: `0 4px 16 0 ${Theme(theme).PRINCIPLE_SHADOW}`
    }
  }

  useEffect(() => {
    if (!isMobileDevice()) {
      import('evergreen-ui').then((importedModule) => {
        setImportedModule(importedModule)
      })
    }
  }, [])
  
  if (importedModule) {
    const ThemeProvider = importedModule.ThemeProvider
    return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>
  }

  return <>{children}</>
}

export const EvergreenThemeProvider = withTheme(EvergreenThemeProviderComponent)

EvergreenThemeProviderComponent.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node
}
