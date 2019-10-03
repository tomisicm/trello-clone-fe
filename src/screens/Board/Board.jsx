import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchBoardTasks } from "../../redux/actions/taskActions"

import Column from "../../components/column/Column"
import ColumnAddCard from "../../components/column/ColumnAddCard"

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
      <div style={{ height: "100vh" }}>
        Board
        <div
          style={{
            display: "flex",
            height: "90%",
            overflowY: "hidden"
          }}
        >
          {columns &&
            columns.length &&
            columns.map(column => <Column key={column.id} column={column} />)}
          <div className="w-100" style={{ height: "100vh" }}>
            <ColumnAddCard
              className="card w-100"
              style={{ width: "18rem" }}
            ></ColumnAddCard>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
