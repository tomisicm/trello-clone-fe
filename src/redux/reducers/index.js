import { combineReducers } from "redux"

import userReducer from "../reducers/userReducer"
import columnReducer from "../reducers/columnReducer"
import boardReducer from "../reducers/boardReducer"

export default combineReducers({
  userReducer,
  columnReducer,
  boardReducer
})
