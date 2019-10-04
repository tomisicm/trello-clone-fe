import React, { useState } from "react"
import { connect } from "react-redux"

import { deleteBoardTask } from "../../redux/actions/taskActions"

import { Card } from "react-bootstrap"
import BaseButton from "./../../components/common/BaseButton"

const TaskCard = props => {
  const { task, index } = props
  const [editState, setEditState] = useState(false)

  function toggleEditState() {
    setEditState(!editState)
  }

  function handleDelete() {
    props.deleteBoardTask(task, index)
  }

  return (
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
      >
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
  )
}

export default connect(
  null,
  { deleteBoardTask }
)(TaskCard)
