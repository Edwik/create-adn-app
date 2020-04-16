import { userSaga } from './Example/saga/user.saga'
import { loginSaga } from './Login/saga/login.saga'
import { forgotPasswordSaga } from './ForgotPassword/saga/forgotPassword.saga'

export default [
  loginSaga,
  userSaga,
  forgotPasswordSaga
]