import React, { Component } from "react"

import List from "./../../components/common/List"

import BoardCard from "../board/BoardCard"

import boardService from "../../utils/services/board-service"

class Home extends Component {
  state = {
    boards: []
  }

  componentDidMount() {
    this.getBoards()
  }

  getBoards() {
    boardService
      .getBoards()
      .then(({ data }) => {
        this.setState({
          boards: [...data]
        })
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
            <div className="row my-2">
              <List items={boards}>{BoardCard}</List>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <h3>Other boards:</h3>
            <div className="row">other list</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
