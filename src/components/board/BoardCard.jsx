import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const BoardCard = props => {
  const { board } = props
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{board.name}</Card.Title>

        <Card.Text className="mb-1 text-muted">{board.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="row mt-1">
          <div className="col">
            <Link to={`boards/${board.id}/tasks`}>Tasks</Link>
          </div>
          <div className="col">
            <Link to={`boards/${board.id}/settings`}>Settings</Link>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default BoardCard
