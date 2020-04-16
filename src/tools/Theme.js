import { LIGHT_THEME, DARK_THEME } from '../utils/Colors'
import { SetTheme } from './../providers/EvergreenThemeProvider/actions'
import {store} from './../store'

const Theme = (theme) => {
  const getTheme = () => {
    // Get them from theme from store
    if (theme) {
      return theme
    } else {
      // Set default them if value if null
      store.dispatch(SetTheme('light'))
      return 'light'
    }
  }

  return getTheme() === 'light' ? LIGHT_THEME : DARK_THEME
}

export default Theme
