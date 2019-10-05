import React, { useState } from "react"
import { connect } from "react-redux"

import { Draggable } from "react-beautiful-dnd"

import {
  deleteBoardTask,
  updateBoardTask
} from "../../redux/actions/taskActions"

import Select from "react-select"
import { Card } from "react-bootstrap"
import BaseButton from "./../../components/common/BaseButton"

const mapStateToProps = state => {
  return {
    boardMembersReducer: state.boardReducer
  }
}

const TaskCard = props => {
  const { task, index } = props
  const [editState, setEditState] = useState(false)
  // const [selectedEmployee, setSelectedEmployeeState] = useState({})

  const { boardMembers } = props.boardMembersReducer

  function toggleEditState() {
    setEditState(!editState)
  }

  function handleDelete() {
    props.deleteBoardTask(task, index)
  }

  function handleSelectAssignee(e) {
    props.updateBoardTask({
      ...task,
      assignee: e.id
    })
  }

  return (
    <Draggable draggableId={String(props.taskId)} index={props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="my-2" bg="light" style={{ width: "18rem" }}>
            <Card.Header>
              <div className="row">
                <div className="col">{task.name}</div>
                {/* <div className="col">menu</div> */}
              </div>
            </Card.Header>
            <Card.Body
              onClick={toggleEditState}
              onBlur={toggleEditState}
              className="mb-2 text-muted"
              style={{ padding: "0.25rem" }}
            >
              <div className="col my-2">
                <Select
                  options={boardMembers}
                  defaultValue={task.assignee}
                  placeholder={"Unassigned Task"}
                  getOptionLabel={option => option.name}
                  getOptionValue={option => option.id}
                  onChange={handleSelectAssignee}
                ></Select>
              </div>
              <Card.Text>{task.description}</Card.Text>
            </Card.Body>

            {editState && (
              <Card.Footer>
                <React.Fragment>
                  <BaseButton
                    onClick={handleDelete}
                    label={"Delete"}
                    classes="btn-sm btn-success mx-2"
                  />
                  {/* <BaseButton
              // onClick={this.toggleEditState}
              label={"Cancel"}
              classes="btn-sm btn-light mx-2"
            /> */}
                </React.Fragment>
              </Card.Footer>
            )}
          </Card>
        </div>
      )}
    </Draggable>
  )
}

export default connect(
  mapStateToProps,
  { deleteBoardTask, updateBoardTask }
)(TaskCard)
