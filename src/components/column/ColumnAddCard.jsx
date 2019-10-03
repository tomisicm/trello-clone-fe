import React, { Component } from "react"
import { Card } from "react-bootstrap"

import Input from "./../../components/common/Input"
import BaseButton from "./../../components/common/BaseButton"

class TaskAddCard extends Component {
  state = {
    editState: false
  }

  toggleEditState = e => {
    this.setState({
      editState: !this.state.editState
    })
  }

  handleSave = e => {
    this.toggleEditState()
  }

  render() {
    const { editState } = this.state

    return (
      <Card style={{ width: "18rem" }} bg="light">
        {!editState && (
          <BaseButton
            onClick={this.toggleEditState}
            label={"+ Add New Column"}
            classes="btn-sm btn-primary"
          />
        )}
        {editState && (
          <React.Fragment>
            <Card.Body
              className="my-1 text-muted"
              style={{ padding: "0.25rem" }}
            >
              <Input placeholder={"Task name"} />
            </Card.Body>
            <Card.Footer>
              <BaseButton
                onClick={this.handleSave}
                label={"Save"}
                classes="btn-sm btn-success"
              />
              <BaseButton
                onClick={this.toggleEditState}
                label={"Cancel"}
                classes="btn-sm btn-light"
              />
            </Card.Footer>
          </React.Fragment>
        )}
      </Card>
    )
  }
}

export default TaskAddCard
