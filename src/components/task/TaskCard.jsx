import React, { useState } from "react"
import { Card } from "react-bootstrap"

import BaseButton from "./../../components/common/BaseButton"

const TaskCard = props => {
  const { task } = props
  const [editState, setEditState] = useState(false)

  function toggleEditState() {
    setEditState(!editState)
  }

  return (
    <Card
      bg="light"
      style={{ width: "18rem" }}
      onClick={toggleEditState}
      onBlur={toggleEditState}
    >
      <Card.Header>
        <div className="row">
          <div className="col">{task.name}</div>
          {/* <div className="col">menu</div> */}
        </div>
      </Card.Header>
      <Card.Body className="mb-2 text-muted">
        <Card.Text>{task.description}</Card.Text>
      </Card.Body>

      <Card.Footer>
        {editState && (
          <React.Fragment>
            <BaseButton
              // onClick={this.handleDelete}
              label={"Delete"}
              classes="btn-sm btn-success mx-2"
            />
            {/* <BaseButton
              // onClick={this.toggleEditState}
              label={"Cancel"}
              classes="btn-sm btn-light mx-2"
            /> */}
          </React.Fragment>
        )}
      </Card.Footer>
    </Card>
  )
}

export default TaskCard
