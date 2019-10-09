import React from "react"

import { Switch, Route, Redirect } from "react-router-dom"

import AppLogin from "./screens/auth/AppLogin"
import AppLogout from "./screens/auth/AppLogout"

import Home from "./screens/home/Home"
import AddBoard from "./screens/board/AddBoard"
import BoardOverview from "./screens/board/BoardOverview"
import BoardSettings from "./screens/board/BoardSettings"

export const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>

        <Route exact path="/auth/login" component={AppLogin} />
        <Route exact path="/auth/logout" component={AppLogout} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/boards/add" component={AddBoard} />
        <Route exact path="/boards/:board/tasks" component={BoardOverview} />
        <Route exact path="/boards/:board/settings" component={BoardSettings} />
      </Switch>
    </main>
  )
}
