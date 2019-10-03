import { FETCH_BOARD_TASKS } from "../constants"

const initialState = {
  columns: []
}

const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARD_TASKS: {
      return [...state.columns, ...action.payload]
    }
    default:
      return state
  }
}

export default columnReducer
