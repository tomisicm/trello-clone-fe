import React, { Component } from "react"
import { connect } from "react-redux"

import { createBoardTask } from "../../redux/actions/taskActions"

import { Card } from "react-bootstrap"
import Input from "./../../components/common/Input"
import Textarea from "./../../components/common/BaseTextarea"
import BaseButton from "./../../components/common/BaseButton"

class TaskAddCard extends Component {
  state = {
    editState: false,
    task: {
      name: "",
      description: ""
    }
  }

  updateTask = ({ target }) => {
    this.setState({
      task: {
        ...this.state.task,
        [target.name]: target.value
      }
    })
  }

  toggleEditState = e => {
    this.setState({
      editState: !this.state.editState
    })
  }

  handleSave = e => {
    this.props.createBoardTask(this.props.columnId, this.state.task)
    this.toggleEditState()
  }

  render() {
    const { editState, task } = this.state

    return (
      <Card style={{ width: "18rem" }} bg="light">
        {!editState && (
          <BaseButton
            onClick={this.toggleEditState}
            label={"+ Add New Task"}
            classes="btn-sm btn-primary"
          />
        )}
        {editState && (
          <React.Fragment>
            <Card.Body
              className="my-1 text-muted"
              style={{ padding: "0.25rem" }}
            >
              <Input
                value={task.name}
                name={"name"}
                placeholder={"Task name"}
                onChange={this.updateTask}
              />
              <Textarea
                value={task.description}
                name={"description"}
                placeholder={"Task description"}
                onChange={this.updateTask}
              />
            </Card.Body>

            <Card.Footer>
              <BaseButton
                onClick={this.handleSave}
                label={"Save"}
                classes="btn-sm btn-success mx-2"
              />
              <BaseButton
                onClick={this.toggleEditState}
                label={"Cancel"}
                classes="btn-sm btn-light mx-2"
              />
            </Card.Footer>
          </React.Fragment>
        )}
      </Card>
    )
  }
}

export default connect(
  null,
  { createBoardTask }
)(TaskAddCard)
