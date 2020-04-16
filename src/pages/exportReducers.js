import loginReducers from './Login/reducers/login.reducers'
import initReducers from './Splash/reducers/init.reducers'
import userReducers from './Example/reducers/user.reducers'
import forgotPasswordReducers from './ForgotPassword/reducers/forgotPassword.reducers'
import toastReducers from './../components/Toast/reducers/toast.reducers'
import errorReducers from './../components/ErrorModal/reducers/error.reducers'
import themeReducer from './../providers/EvergreenThemeProvider/reducer'

import dashboardReducers from './Dashboard/reducers/dashboard.reducers'

export default {
  initReducers,
  loginReducers,
  userReducers,
  forgotPasswordReducers,
  toastReducers,
  errorReducers,
  themeReducer,
  dashboardReducers
}
