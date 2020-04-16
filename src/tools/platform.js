import { Platform, Dimensions } from 'react-native'

export const isMobileDevice = () => {
  let inAMobileDevice = false
  
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    inAMobileDevice = true

  } else {
    const platformDetect = require('react-device-detect')
    inAMobileDevice = platformDetect.isMobile

  }
  return inAMobileDevice
}

export const isSmallDevice = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width
  return SCREEN_WIDTH < 1100
}
