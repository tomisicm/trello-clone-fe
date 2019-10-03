import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchBoardTasks } from "../../redux/actions/columnActions"

import Column from "../../components/column/Column"

const mapStateToProps = state => {
  return {
    tasksReducer: state.tasksReducer
  }
}

const mapDispatchToProps = { fetchBoardTasks }

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
