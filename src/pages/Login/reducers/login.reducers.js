import actionsConstants from '../../../config/constants/actions.constants'

const initialState = {
  LoginResponse: {}
}

export default (state = initialState, action) => {
  switch(action.type){

    case actionsConstants.successFetchLogin :
      return { ...state, LoginResponse: action.payload}

    case actionsConstants.failFetchLogin:
      return { ...state, LoginResponse: action.payload}
      
    default:
      return state
  }
}