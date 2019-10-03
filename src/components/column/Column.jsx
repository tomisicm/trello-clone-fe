import React from "react"

import TaskCard from "../task/TaskCard"

const Column = props => {
  //   const { name } = this.props

  return (
    <div style={{ border: "2px solid blue", height: "100vh" }}>
      <div>Column Name</div>

      <div
        style={{ overflow: "scroll", height: "100vh", paddingBottom: "170px" }}
      >
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  )
}

export default Column
