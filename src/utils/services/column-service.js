import http from "./http-service"

class ColumnService {
  createColumn(boardId, column) {
    return http.post(`/api/boards/${boardId}/columns`, column)
  }

  editColumn(column) {
    const { id } = column
    return http.put(`/api/columns/${id}`, column)
  }

  deleteColumn(column) {
    return http.delete(`/api/columns/${column.id}`)
  }
}

const columnService = new ColumnService()

export default columnService
