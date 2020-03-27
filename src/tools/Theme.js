import { Constants } from './Constants'
import {LIGHT_THEME, DARK_THEME} from '../utils/Colors'

const Theme = Constants.THEME === 'LightMode' ? LIGHT_THEME : DARK_THEME
export default Theme
