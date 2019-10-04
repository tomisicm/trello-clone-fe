import {
  CREATE_BOARD_COLUMN,
  FETCH_BOARD_TASKS,
  CREATE_BOARD_TASK,
  DELETE_BOARD_TASK
} from "../constants"

import _ from "lodash"

const initialState = {
  columns: []
}

const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARD_TASKS: {
      return [...state.columns, ...action.payload]
    }
    case CREATE_BOARD_COLUMN: {
      return [...state, action.payload]
    }
    case CREATE_BOARD_TASK: {
      const taskColumnId = action.payload.column_id

      return state.map((column, index) => {
        if (column.id === taskColumnId) {
          return {
            ...column,
            tasks: [...column.tasks, action.payload]
          }
        }
        return column
      })
    }
    case DELETE_BOARD_TASK: {
      const taskColumnId = action.payload.column_id
      const removedTask = action.payload.id

      const column = [...state.filter(col => col.id === taskColumnId)]

      const columnTasks = [...column[0].tasks]

      const newTasks = columnTasks.filter(task => {
        return task.id !== removedTask.id
      })

      console.log(newTasks)

      return state
    }
    default:
      return state
  }
}

export default columnReducer
