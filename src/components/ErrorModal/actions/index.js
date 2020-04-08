import actionsConstants from '../../../config/constants/actions.constants'

export const SendGeneralError  = (payload) =>{
  return{
    type: actionsConstants.sendGeneralError,
    payload
  }
}

export const ClearGeneralErrorData  = () =>{
  return{
    type: actionsConstants.clearGeneralErrorData
  }
}