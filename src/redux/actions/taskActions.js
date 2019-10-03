import { FETCH_BOARD_TASKS } from "../constants"
import taskService from "../../utils/services/task-service"

export function fetchBoardTasks(boardId) {
  return async function(dispatch, getState) {
    const { data } = await taskService.getTasks(boardId)

    dispatch({ type: FETCH_BOARD_TASKS, payload: data })
  }
}
