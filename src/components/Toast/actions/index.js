import actionsConstants from '../../../config/constants/actions.constants'

export const SendToast  = (payload) =>{
  return{
    type: actionsConstants.sendToast,
    payload
  }
}

export const ClearToastData  = () =>{
  return{
    type: actionsConstants.clearToastData
  }
}