import Example from './Example'
import Login from './Login'

export default [
  {
    name: 'Example',
    path: 'example',
    component: Example,
    reducers: require('./Example/reducers'),
    sagas: require('./Example/saga')
  },
  {
    name: 'Login',
    path: 'login',
    component: Login
  }
]