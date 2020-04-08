import { isMobileDevice } from '../../tools/platform'
import ModalizeMobile from './index.jsx'
import ModalWeb from '../Modal/index.web'

export default isMobileDevice()
  ? ModalizeMobile
  : ModalWeb
