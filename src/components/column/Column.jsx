import React from "react"

import { Droppable } from "react-beautiful-dnd"

import TaskCard from "../task/TaskCard"
import AddTaskCard from "../task/TaskAddCard"

const Column = props => {
  const { column } = props

  return (
    <div
      className="w-100"
      id={`board-column-${props.index}`}
      style={{ height: "100vh" }}
    >
      <div className="card w-100" style={{ width: "18rem" }}>
        {column.name}
      </div>

      <Droppable droppableId={String(column.id)}>
        {provided => (
          <div
            style={{
              overflow: "scroll",
              height: "100vh",
              paddingBottom: "170px"
            }}
            className="mt-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div>
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
            </div>
            {provided.placeholder}

            <AddTaskCard columnId={column.id} />
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
