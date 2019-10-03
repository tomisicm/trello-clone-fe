import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchBoardTasks } from "../../redux/actions/columnActions"

import Column from "../../components/column/Column"

const mapStateToProps = state => {
  return {
    columnReducer: state.columnReducer
  }
}

const mapDispatchToProps = { fetchBoardTasks }

class Board extends Component {
  state = {
    // columns: []
  }

  componentDidMount() {
    this.props.fetchBoardTasks(this.props.match.params.board)
  }

  componentDidUpdate() {}

  render() {
    const columns = this.props.columnReducer

    return (
      <div className="container">
        Board
        <div className="row">
          {columns &&
            columns.length &&
            columns.map(column => <Column key={column.id}></Column>)}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
