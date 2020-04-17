import actionsConstants from '../../../config/constants/actions.constants'

const initialState = {
  quickNumbers: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionsConstants.successFetchQuickNumbers :
      return { ...state, quickNumbers: action.payload }
    case actionsConstants.failFetchQuickNumbers:
      return { ...state, quickNumbers: action.payload }
    case actionsConstants.clearQuickNumbersData:
      return { ...state, quickNumbers: {} }
    default:
      return state
  }
}