import { CREATE_BOARD_COLUMN } from "../constants"
import columnService from "../../utils/services/column-service"

export function createBoardColumn(boardId, column) {
  return async function(dispatch, getState) {
    const { data } = await columnService.createColumn(boardId, column)

    dispatch({ type: CREATE_BOARD_COLUMN, payload: data })
  }
}

export function reorderBoardColumns(call) {
  const { e, boardId } = call

  e.destination.droppableId.replace("column-", "")
  e.source.droppableId.replace("column-", "")

  const replaceOrder = {
    from: parseInt(e.destination.droppableId.replace("column-", ""), 10),
    to: parseInt(e.source.droppableId.replace("column-", ""), 10)
  }

  return async function(dispatch, getState) {
    const { data } = await columnService.reorderColumns(boardId, replaceOrder)
    console.log(data)
  }
}
