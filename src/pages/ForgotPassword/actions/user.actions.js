import actionsConstants from '../../../config/constants/actions.constants'

export const SendForgotPasswordEmail  = (payload) =>{
  return{
    type: actionsConstants.sendForgotPasswordEmail,
    payload
  }
}