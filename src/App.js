import React, { Component } from "react"

import MainNavigation from "./components/navigation/MainNavigation"

import "./App.css"

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <div>Linus</div>
      </React.Fragment>
    )
  }
}

export default App
