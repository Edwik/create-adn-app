import Constants from './../../../config/constants/actions.constants'

export const SetTheme = payload => {
  return {
    type: Constants.setTheme,
    payload
  }
}
