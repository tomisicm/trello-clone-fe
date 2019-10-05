import React, { Component } from "react"

import BoardList from "./../../components/board/BoardList"

import boardService from "../../utils/services/board-service"

class Home extends Component {
  state = {
    boards: {}
  }

  componentDidMount() {
    this.getBoards()
  }

  getBoards() {
    boardService
      .getBoards()
      .then(({ data }) => {
        this.setState({
          boards: data
        })
        console.log(this.state)
      })
      .catch(({ response }) => {
        const { errors } = response.data
        this.setState({
          errors: { ...errors }
        })
      })
  }

  render() {
    const { boards } = this.state

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="container">
            <h3>My boards:</h3>
            {boards.owned && (
              <div className="row my-2">
                <BoardList items={boards.owned}></BoardList>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="container">
            <h3>Other boards:</h3>
            {boards.member && (
              <div className="row my-2">
                <BoardList items={boards.member}></BoardList>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
