import React, { Component } from "react"
import { Card } from "react-bootstrap"

import { connect } from "react-redux"

import { createBoardColumn } from "../../redux/actions/columnActions"

import Input from "./../../components/common/Input"
import BaseButton from "./../../components/common/BaseButton"

const mapStateToProps = state => {
  return {
    columnReducer: state.columnReducer
  }
}

class TaskAddCard extends Component {
  state = {
    editState: false,
    column: { name: "" },
    errors: {}
  }

  toggleEditState = e => {
    this.setState({
      editState: !this.state.editState
    })
  }

  handleSave = e => {
    this.props.createBoardColumn(this.props.boardId, this.state.column)
    this.toggleEditState()
  }

  updateColumnName = ({ target }) => {
    this.setState({
      column: {
        [target.name]: target.value
      }
    })
  }

  render() {
    const { editState, column } = this.state

    const { errors } = this.state

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
              <Input
                name="name"
                value={column.name}
                placeholder={"Column name"}
                onChange={this.updateColumnName}
                error={errors.name}
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
  mapStateToProps,
  { createBoardColumn }
)(TaskAddCard)
