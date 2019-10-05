import {
  FETCH_BOARD_TASKS,
  CREATE_BOARD_TASK,
  UPDATE_BOARD_TASK,
  DELETE_BOARD_TASK
} from "../constants"

import taskService from "../../utils/services/task-service"

export function fetchBoardTasks(boardId) {
  return async function(dispatch, getState) {
    const { data } = await taskService.getTasks(boardId)

    dispatch({ type: FETCH_BOARD_TASKS, payload: data })
  }
}

export function updateBoardTask(task) {
  return async function(dispatch, getState) {
    const { data } = await taskService.updateTask(task)

    dispatch({ type: UPDATE_BOARD_TASK, payload: data })
  }
}

export function updateColumnBoardTask({ destination, source, taskId }) {
  return async function(dispatch, getState) {
    const { data } = await taskService.updateTask({
      id: taskId,
      column_id: destination.droppableId
    })

    //object to be removed
    dispatch({
      type: DELETE_BOARD_TASK,
      payload: {
        id: parseInt(taskId, 10),
        column_id: parseInt(source.droppableId, 10)
      }
    })

    // new incoming object
    dispatch({ type: CREATE_BOARD_TASK, payload: data })
  }
}

export function createBoardTask(columnId, task) {
  return async function(dispatch, getState) {
    const { data } = await taskService.createTask(columnId, task)

    dispatch({ type: CREATE_BOARD_TASK, payload: data })
  }
}

export function deleteBoardTask(task) {
  return async function(dispatch, getState) {
    const { data } = await taskService.deleteTask(task)

    dispatch({
      type: DELETE_BOARD_TASK,
      payload: { ...data, column_id: task.column_id }
    })
  }
}
