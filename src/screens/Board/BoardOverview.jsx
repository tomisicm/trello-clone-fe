import React, { Component } from "react"
import { connect } from "react-redux"

import { DragDropContext, Droppable } from "react-beautiful-dnd"

import {
  fetchBoardTasks,
  reorderBoardTask
} from "../../redux/actions/taskActions"
import { fetchBoardMembers } from "../../redux/actions/boardActions"
import { reorderBoardColumns } from "../../redux/actions/columnActions"

import Column from "../../components/column/Column"
import ColumnAddCard from "../../components/column/ColumnAddCard"

const mapStateToProps = state => {
  return {
    columnReducer: state.columnReducer
  }
}

const mapDispatchToProps = {
  fetchBoardTasks,
  reorderBoardTask,
  reorderBoardColumns,
  fetchBoardMembers
}

class Board extends Component {
  state = {
    // columns: []
  }

  componentDidMount() {
    this.props.fetchBoardTasks(this.props.match.params.board)
    this.props.fetchBoardMembers(this.props.match.params.board)
  }

  componentDidUpdate() {
    console.log("rerender")
  }

  onDragEnd = e => {
    try {
      /* taskId == draggableId, destination.droppableId = column_id **/
      const { destination, source, draggableId, type } = e
      const boardId = this.props.match.params.board

      if (!destination) return
      if (!source) return
      if (!draggableId) return
      if (destination.droppableId === source.droppableId) return

      if (type === "COLUMN") {
        this.props.reorderBoardColumns({ boardId, e })
      } else {
        this.props.reorderBoardTask({
          source,
          destination,
          taskId: draggableId
        })
      }
    } catch {
      console.error(e)
    }
  }

  render() {
    const { columns } = this.props.columnReducer

    return (
      <div style={{ height: "100vh" }}>
        <h3 className="my-2 mx-2">Board</h3>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div
            style={{
              display: "flex",
              height: "90%",
              overflowY: "hidden"
            }}
          >
            {columns.length > 0 &&
              columns.map((column, index) => (
                <Droppable
                  droppableId={`column-${column.id}`}
                  direction={"horizontal"}
                  type={"COLUMN"}
                  key={column.id}
                >
                  {provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {/*  */}

                      <Column index={index} column={column} />
                      {provided.placeholder}

                      {/*  */}
                    </div>
                  )}
                </Droppable>
              ))}

            <div className="w-100" style={{ height: "100vh" }}>
              <ColumnAddCard
                boardId={this.props.match.params.board}
                className="card w-100"
                style={{ width: "18rem" }}
              />
            </div>
          </div>
        </DragDropContext>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
