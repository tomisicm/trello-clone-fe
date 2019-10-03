import React from "react"
import { Card } from "react-bootstrap"

import TaskCard from "../task/TaskCard"

const Column = props => {
  const { column } = props

  return (
    <div className="w-100" style={{ height: "100vh" }}>
      <div className="card w-100" style={{ width: "18rem" }}>
        {column.name}
      </div>

      <div
        style={{ overflow: "scroll", height: "100vh", paddingBottom: "170px" }}
      >
        {column.tasks.length >= 1 &&
          column.tasks.map(task => <TaskCard key={task.id} task={task} />)}
        <Card style={{ width: "18rem" }} bg="light">
          <Card.Body className="mb-2 text-muted">
            <Card.Text>Add new task</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Column
