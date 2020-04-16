import React from 'react'
import { Router, Route, Switch, Redirect } from './AppRouterSources'
import { connect } from 'react-redux'
import GeneralLayout from './layouts/General'
import MainLayout from './layouts/Main'
import AccountLayout from './layouts/Account'

import BasicPageComponent from './../components/BasicPageComponent'

function AppNavigator({Auth}) {
  return (
    <Router>
      <Switch>
        <Route
          path={`/main`}
          render={props => Auth.length>0
            ? <MainLayout {...props} />
            : <Redirect to='/' />
          }
        />
        <Route
          path={`/account`}
          render={props => Auth.length>0
            ? <AccountLayout {...props} />
            : <Redirect to='/' />
          }
        />
        <Route
          path={`/`}
          render={props => <GeneralLayout {...props} />}
        />
        <Route component={BasicPageComponent} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state, props) => {
  return {
    Auth: state.initReducers.TOKEN
  }
}

const redux = connect(mapStateToProps, null )(AppNavigator)
export default redux