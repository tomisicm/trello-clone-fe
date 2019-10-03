import { combineReducers } from "redux"

import userReducer from "../reducers/userReducer"
import columnReducer from "../reducers/columnReducer"

export default combineReducers({
  userReducer,
  columnReducer
})
