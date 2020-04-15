import actionsConstants from '../../../config/constants/actions.constants'

const initialState = {
  toastData: {}
}

export default (state = initialState, action) => {
  switch(action.type){
    case actionsConstants.sendToast :
      return { ...state, toastData: action.payload }
    case actionsConstants.clearToastData:
      return { ...state, toastData: {} }
    default:
      return state
  }
}