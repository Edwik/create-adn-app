import userReducers from './Example/reducers/user.reducers'
import forgotPasswordReducers from './ForgotPassword/reducers/forgotPassword.reducers'
import toastReducers from './../components/Toast/reducers/toast.reducers'
import errorReducers from './../components/ErrorModal/reducers/error.reducers'
import themeReducer from './../providers/EvergreenThemeProvider/reducer'

export default {
  userReducers,
  forgotPasswordReducers,
  toastReducers,
  errorReducers,
  themeReducer
}
