import Example from './Example'
import Login from './Login'
import ForgotPassword from './ForgotPassword'

export default [
  {
    name: 'Example',
    path: 'example',
    component: Example
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    layout: '/auth'
  },
  {
    name: 'Forgot Password',
    path: '/forgot-password',
    component: ForgotPassword,
    layout: '/auth'
  }
]