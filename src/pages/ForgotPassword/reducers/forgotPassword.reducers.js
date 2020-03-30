import actionsConstants from '../../../config/constants/actions.constants'

const initialState = {
  sendForgotPasswordEmailResponse: {}
}

export default (state = initialState, action) => {
  switch(action.type){
    case actionsConstants.successSendForgotPasswordEmail :
      return { ...state, sendForgotPasswordEmailResponse: action.payload}
    case actionsConstants.successSendForgotPasswordEmail:
      return { ...state, sendForgotPasswordEmailResponse: action.payload}
    default:
      return state
  }
}