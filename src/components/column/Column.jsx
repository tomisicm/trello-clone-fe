import React from "react"

import { Droppable } from "react-beautiful-dnd"

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
        style={{
          overflow: "scroll",
          height: "100vh",
          paddingBottom: "170px"
        }}
        className="mt-2"
      >
        <Droppable droppableId={String(column.id)}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {column.tasks.length >= 1 &&
                column.tasks.map((task, index) => (
                  // taskId ??
                  <TaskCard
                    key={task.id}
                    index={index}
                    task={task}
                    taskId={task.id}
                  />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <AddTaskCard columnId={column.id} />
      </div>
    </div>
  )
}

export default Column
