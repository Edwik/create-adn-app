import actionsConstants from '../../../config/constants/actions.constants'

const initialState = {
  TOKEN: ''
}

export default (state = initialState, action) => {
  switch(action.type){

    case actionsConstants.saveToken :
      return { ...state, TOKEN: action.payload}

    default:
      return state
  }
}