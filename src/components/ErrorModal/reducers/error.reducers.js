import actionsConstants from '../../../config/constants/actions.constants'

const initialState = {
  generalErrorData: {}
}

export default (state = initialState, action) => {
  switch(action.type){
    case actionsConstants.sendGeneralError :
      return { ...state, generalErrorData: action.payload }
    case actionsConstants.clearGeneralErrorDatas:
      return { ...state, generalErrorData: {} }
    default:
      return state
  }
}