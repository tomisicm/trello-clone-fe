import {
  FETCH_BOARD_TASKS,
  CREATE_BOARD_TASK,
  DELETE_BOARD_TASK
} from "../constants"

import taskService from "../../utils/services/task-service"

export function fetchBoardTasks(boardId) {
  return async function(dispatch, getState) {
    const { data } = await taskService.getTasks(boardId)

    dispatch({ type: FETCH_BOARD_TASKS, payload: data })
  }
}

export function createBoardTask(columnId, task) {
  return async function(dispatch, getState) {
    const { data } = await taskService.createTask(columnId, task)

    dispatch({ type: CREATE_BOARD_TASK, payload: data })
  }
}

export function deleteBoardTask(task, index) {
  return async function(dispatch, getState) {
    const { data } = await taskService.deleteTask(task)

    dispatch({
      type: DELETE_BOARD_TASK,
      payload: { id: data, column_id: task.column_id, index: index }
    })
  }
}
