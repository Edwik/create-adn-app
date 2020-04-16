import actionsConstants from '../../../config/constants/actions.constants'

export const LoginAction  = (payload) =>{
  return{
    type: actionsConstants.fetchLogin,
    payload
  }
}