import React, { Component } from "react"

import MainNavigation from "./components/navigation/MainNavigation"

import { Routes } from "./routes"

import "./App.css"

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <Routes></Routes>
      </React.Fragment>
    )
  }
}

export default App
