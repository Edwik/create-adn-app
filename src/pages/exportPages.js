import Example from './Example'
import Splash from './Splash'
import Login from './Login'
import ForgotPassword from './ForgotPassword'

export default [
  {
    name: 'Splash',
    path: '',
    component: Splash
  },
  {
    name: 'Example',
    path: 'loads/my-available-load',
    component: Example
  },
  {
    name: 'Login',
    path: 'login',
    component: Login
  },
  {
    name: 'Forgot Password',
    path: 'forgot-password',
    component: ForgotPassword
  }
]