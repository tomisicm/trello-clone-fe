import React from "react"

import TaskCard from "../task/TaskCard"
import AddTaskCard from "../task/TaskAddCard"

const Column = props => {
  const { column } = props

  return (
    <div className="w-100" style={{ height: "100vh" }}>
      <div className="card w-100" style={{ width: "18rem" }}>
        {column.name}
      </div>

      <div
        style={{ overflow: "scroll", height: "100vh", paddingBottom: "170px" }}
      >
        {column.tasks.length >= 1 &&
          column.tasks.map((task, index) => (
            <TaskCard key={task.id} index={index} task={task} />
          ))}

        <AddTaskCard columnId={column.id} />
      </div>
    </div>
  )
}

export default Column
