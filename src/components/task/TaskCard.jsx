import React from "react"
import { Card } from "react-bootstrap"

const TaskCard = props => {
  return (
    <Card bg="light" style={{ width: "18rem" }}>
      <Card.Header>Header</Card.Header>
      <Card.Body className="mb-2 text-muted">
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TaskCard
