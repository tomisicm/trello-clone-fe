import { CREATE_BOARD_COLUMN } from "../constants"
import columnService from "../../utils/services/column-service"

export function createBoardColumn(boardId, column) {
  return async function(dispatch, getState) {
    const { data } = await columnService.createColumn(boardId, column)

    dispatch({ type: CREATE_BOARD_COLUMN, payload: data })
  }
}
