import actionsConstants from '../actions/actions.constants'

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case actionsConstants.successFetchUsers :
      return { ...state, users: action.payload}
    case actionsConstants.failFetchUsers:
      return { ...state, users: action.payload}
    default:
      return state
  }
}