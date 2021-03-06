import React from "react"

import { Draggable, Droppable } from "react-beautiful-dnd"

import TaskCard from "../task/TaskCard"
import AddTaskCard from "../task/TaskAddCard"

const Column = props => {
  const { column } = props

  return (
    <Draggable draggableId={String(column.id)} index={props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card w-100" style={{ width: "18rem" }}>
            {column.name}
          </div>

          <Droppable droppableId={`column-${column.id}`}>
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
      )}
    </Draggable>
  )
}

export default Column
