import React from 'react'
import { Router, Route, Switch, Redirect } from './AppRouterSources'

import { isAuthenticated } from '../tools/auth'
import AuthLayout from './layouts/Auth'
import MainLayout from './layouts/Main'
import AccountLayout from './layouts/Account'

import BasicPageComponent from './../components/BasicPageComponent'

function AppNavigator() {
  return (
    <Router>
      <Switch>
        <Route
          path={`/auth`}
          render={props => !isAuthenticated()
            ? <AuthLayout {...props} />
            : <Redirect to='/dashboard' />
          }
        />
        <Route
          path={`/`}
          render={props => isAuthenticated()
            ? <MainLayout {...props} />
            : <Redirect to='/auth/login' />
          }
        />
        <Route
          path={`/account`}
          render={props => isAuthenticated()
            ? <AccountLayout {...props} />
            : <Redirect to='/auth/login' />
          }
        />
        <Route component={BasicPageComponent} />
      </Switch>
    </Router>
  )
}

export default AppNavigator