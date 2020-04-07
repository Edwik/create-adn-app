import React from 'react'
import { Route, Switch, Redirect } from './../AppRouterSources'

import Pages from '../../pages/exportPages'

const LayoutNavigator = (props) => {
  const { layout, defaultPath } = props
  const layoutPages = Pages.filter(page => page.layout === layout)

  return (
    <Switch>
      {
        layoutPages.map((page, index) => {
          return (
            <Route
              exact
              path={`${layout !== '/main' ? layout : ''}${page.path}`}
              component={page.component}
              key={index}
            />
          )
        })
      }
      <Redirect to={defaultPath} />
    </Switch>
  )
}

export default LayoutNavigator
