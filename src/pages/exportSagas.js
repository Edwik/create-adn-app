import { userSaga } from './Example/saga/user.saga'
import { forgotPasswordSaga } from './ForgotPassword/saga/forgotPassword.saga'
import { dashboardSaga } from './Dashboard/saga/dashboard.saga'

export default [
  userSaga,
  forgotPasswordSaga,
  dashboardSaga
]