import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import _ from "lodash"

import AppLogin from "./screens/auth/AppLogin"
import AppLogout from "./screens/auth/AppLogout"
import PrivateRoute from "./components/navigation/PrivateRoute"

import Home from "./screens/home/Home"
import AddBoard from "./screens/board/AddBoard"
import BoardOverview from "./screens/board/BoardOverview"
import BoardSettings from "./screens/board/BoardSettings"

import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  }
}

const Routes = props => {
  const { user } = props.userReducer

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth/login"></Redirect>
        </Route>

        <Route exact path="/auth/login" component={AppLogin} />
        <Route exact path="/auth/logout" component={AppLogout} />

        <PrivateRoute
          authenticated={!_.isEmpty(user)}
          component={() => {
            return (
              <React.Fragment>
                <Route exact path="/home" component={Home} />
                <Route exact path="/boards/add" component={AddBoard} />
                <Route
                  exact
                  path="/boards/:board/tasks"
                  component={BoardOverview}
                />
                <Route
                  exact
                  path="/boards/:board/settings"
                  component={BoardSettings}
                />
              </React.Fragment>
            )
          }}
        />
      </Switch>
    </main>
  )
}

export default connect(
  mapStateToProps,
  null
)(Routes)
