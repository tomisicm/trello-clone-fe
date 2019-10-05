import { FETCH_BOARD_MEMBERS } from "../constants"
import boardService from "../../utils/services/board-service"

export function fetchBoardMembers(boardId) {
  return async function(dispatch, getState) {
    const { data } = await boardService.getBoardMembers(boardId)

    dispatch({ type: FETCH_BOARD_MEMBERS, payload: data })
  }
}
