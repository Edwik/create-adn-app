import { isMobileDevice } from './../../tools/platform'
import ModalMobile from './mobile.modal'
import ModalWeb from './web.modal'

export default isMobileDevice()
  ? ModalMobile
  : ModalWeb