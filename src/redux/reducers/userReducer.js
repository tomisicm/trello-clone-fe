import { FETCH_CURRENT_USER, AUTH_LOGIN_USER } from "../constants"
import { getCurrentUserFromLS } from "../../utils/services/auth-service"

const initialState = {
  user: getCurrentUserFromLS()
}

function userReducer(state = initialState, action) {
  if (action.type === FETCH_CURRENT_USER) {
    return { ...state, user: action.payload }
  }

  if (action.type === AUTH_LOGIN_USER) {
    return { ...state, user: action.payload }
  }

  return state
}

export default userReducer
