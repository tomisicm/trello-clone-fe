import React, { Component } from "react"

import Column from "../../components/column/Column"

class Board extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        Board
        <div className="row">
          <Column />
        </div>
      </div>
    )
  }
}

export default Board
