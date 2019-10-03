import http from "./http-service"

class TaskService {
  getTasks(id) {
    return http.get(`/api/boards/${id}/tasks`)
  }

  createTask(columnId, task) {
    return http.post(`/api/columns/${columnId}/tasks`, task)
  }

  editTask(task) {
    const { id } = task
    return http.put(`/api/tasks/${id}`, task)
  }

  deleteTask(task) {
    return http.delete(`/api/tasks/${task.id}`)
  }
}

const taskService = new TaskService()

export default taskService
