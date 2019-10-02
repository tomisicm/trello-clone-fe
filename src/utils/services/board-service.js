import http from "./http-service"

class BoardService {
  getBoards() {
    return http.get(`/api/boards`)
  }

  createBoard(board) {
    return http.post(`/api/boards`, board)
  }

  editBoard(board) {
    const { id } = board
    return http.put(`/api/boards/${id}`, board)
  }

  deleteBoard(board) {
    return http.delete(`/api/boards/${board.id}`)
  }
}

const boardService = new BoardService()

export default boardService
