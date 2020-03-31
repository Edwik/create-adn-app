import React from 'react'
import { Router, Route, Switch, Redirect } from './AppRouterSources'

import BasicPageComponent from './../components/BasicPageComponent'
import Pages from '../pages/exportPages'

function AppNavigator() {

  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/forgot-password' />
        {
          Pages.map( (page, index) => {
            return (
              <Route exact path={`/${page.path}`} component={ page.component } key={index} />
            )
          })
        }
        <Route component={BasicPageComponent} />
      </Switch>
    </Router>
  )
}

export default AppNavigator