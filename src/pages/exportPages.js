import Example from './Example'
import Splash from './Splash'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Dashboard from './Dashboard'
import Loads from './Loads'
import Tractors from './Tractors'
import Offers from './Offers'
import Orders from './Orders'

export default [
  {
    name: 'Splash',
    path: '/',
    component: Splash,
    layout: '/general'
  },
  {
    name: 'Example',
    path: 'loads/my-available-load',
    component: Example,
    layout: '/general'
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    layout: '/general'
  },
  {
    name: 'Forgot Password',
    path: '/forgot-password',
    component: ForgotPassword,
    layout: '/general'
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    layout: '/main'
  },
  {
    name: 'Loads',
    path: '/loads',
    component: Loads,
    layout: '/main'
  },
  {
    name: 'Tractors',
    path: '/tractors',
    component: Tractors,
    layout: '/main'
  },
  {
    name: 'Offers',
    path: '/offers',
    component: Offers,
    layout: '/main'
  },
  {
    name: 'Orders',
    path: '/orders',
    component: Orders,
    layout: '/main'
  }
]