import {
  CREATE_BOARD_COLUMN,
  FETCH_BOARD_TASKS,
  CREATE_BOARD_TASK,
  DELETE_BOARD_TASK
} from "../constants"

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
      const removedTask = action.payload.id

      const newState = [...state]

      newState.forEach(function(o) {
        o.tasks = o.tasks.filter(task => {
          return task.id !== removedTask.id
        })
      })

      return newState
    }
    default:
      return state
  }
}

export default columnReducer
