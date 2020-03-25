import React from 'react'
import { Router, Route, Switch } from './AppRouterSources'

import BasicPageComponent from './../components/BasicPageComponent'
import Pages from '../pages/export'

function AppNavigator() {

  return (
    <Router>
      <Switch>
        {
          Pages.map( (route, index) => {
            return (
              <Route exact path={`/${route.name}`} component={ route } key={index} />
            )
          })
        }
        <Route component={BasicPageComponent} />
      </Switch>
    </Router>
  )
}

export default AppNavigator