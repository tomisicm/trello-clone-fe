import { FETCH_CURRENT_USER } from "../constants"

import userService from "../../utils/services/user-service"
import authService from "../../utils/services/auth-service"

export function login(body) {
  return async function(dispatch, getState) {
    Promise.all([
      await authService.login(body),
      await userService.getCurrentUser()
    ]).then(data => {
      dispatch({ type: FETCH_CURRENT_USER, payload: data[1] })
    })
  }
}
