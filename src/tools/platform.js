import { Platform } from 'react-native'

const isMobileDevice = () => {
  let inAMobileDevice = false
  
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    inAMobileDevice = true

  } else {
    const platformDetect = require('react-device-detect')
    inAMobileDevice = platformDetect.isMobile

  }
  return inAMobileDevice
}

export default isMobileDevice