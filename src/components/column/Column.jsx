import React from "react"

import TaskCard from "../task/TaskCard"

const Column = props => {
  //   const { name } = this.props

  return (
    <div className="col-md-6">
      <div className="row my-2">Column Name</div>

      <div className="row">
        <TaskCard />
      </div>
    </div>
  )
}

export default Column
