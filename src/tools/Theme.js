import { Constants } from './Constants'
import {LIGHT_THEME, DARK_THEME} from '../utils/Colors'

const Theme = Constants.THEME === 'LightMode' ? LIGHT_THEME : DARK_THEME
export default Theme

export const ElementsTheme = {
  colors: {
    primary: Theme.PRIMARY_COLOR,
    secondary: Theme.ACCENT_COLOR,
    divider: Theme.DIVIDER_COLOR
  }
}
