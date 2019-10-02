import React, { Component } from "react"

import BaseInput from "./../../components/common/Input"
import BaseButton from "./../../components/common/BaseButton"
import BaseTextarea from "./../../components/common/BaseTextarea"
import BaseCheckbox from "./../../components/common/BaseCheckbox"

class AddBoard extends Component {
  state = {
    board: {
      isPrivate: false
    },
    errors: {}
  }

  updateBoardName = ({ target }) => {
    console.log(target)
  }

  updateBoardDescription = ({ target }) => {
    console.log(target)
  }

  updateIsPrivate = (e, t) => {
    const isPvt = this.state.board.isPrivate

    this.setState({
      board: { ...this.state.board, isPrivate: !isPvt }
    })
  }

  render() {
    const { board, errors } = this.state

    return (
      <div className="container mt-5">
        <div className="row">
          <h1>Add New Board</h1>
        </div>
        <div className="row">
          <div className="card my-2 w-100">
            <div className="card-header">
              <div className="col-md-8">
                <BaseInput
                  name="name"
                  value={board.name}
                  onChange={this.updateBoardName}
                  label="Board name:"
                  classes="form-control"
                  error={errors.title}
                />
              </div>
            </div>

            <div className="card-body" style={{ padding: "0.5rem" }}>
              <div className="card-text ml-4">
                <div className="row">
                  <BaseTextarea
                    value={board.description}
                    onChange={this.updateBoardDescription}
                    name={"description"}
                    textareaFieldClasses="form-control w-100"
                    placeholder={"Board description..."}
                  />
                </div>
                <div className="row">
                  <BaseCheckbox
                    value={board.isPrivate}
                    onClick={this.updateIsPrivate}
                    label={"Is board private?"}
                  />
                </div>
              </div>
            </div>

            <div className="card-footer">
              <React.Fragment>
                <BaseButton
                  onClick={() => this.handleSaveBoard()}
                  label={"Save"}
                  classes="btn btn-primary mx-2"
                />
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddBoard
