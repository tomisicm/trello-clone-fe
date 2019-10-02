import React from "react"

import { Switch, Route, Redirect } from "react-router-dom"

import AppLogin from "./screens/auth/AppLogin"
import AppLogout from "./screens/auth/AppLogout"

import Home from "./screens/home/Home"
import AddBoard from "./screens/board/AddBoard"

export const Routes = () => {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>

        <Route exact path="/auth/login" component={AppLogin} />
        <Route exact path="/auth/logout" component={AppLogout} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/board/add" component={AddBoard} />
      </Switch>
    </main>
  )
}
