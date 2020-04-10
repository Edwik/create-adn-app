import Constants from './../../../config/constants/actions.constants'
const initialState = {
  theme: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Theme
    case Constants.setTheme :
      return { ...state, theme: action.payload }
    default :
      return state
  }
}
