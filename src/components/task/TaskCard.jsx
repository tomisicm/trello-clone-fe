import React from "react"
import { Card } from "react-bootstrap"

const TaskCard = props => {
  const { task } = props

  return (
    <Card bg="light" style={{ width: "18rem" }}>
      <Card.Header>{task.name}</Card.Header>
      <Card.Body className="mb-2 text-muted">
        <Card.Text>{task.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TaskCard
