import { FETCH_BOARD_MEMBERS } from "../constants"

const initialState = {
  boardMembers: [{ name: "Unassigned Task", id: null }]
}

function boardMembersReducer(state = initialState, action) {
  if (action.type === FETCH_BOARD_MEMBERS) {
    return {
      ...state,
      boardMembers: [...action.payload, ...state.boardMembers]
    }
  }
  return state
}

export default boardMembersReducer
