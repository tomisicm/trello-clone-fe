import { FETCH_BOARD_TASKS, CREATE_BOARD_COLUMN } from "../constants"

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
    default:
      return state
  }
}

export default columnReducer
