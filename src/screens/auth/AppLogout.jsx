import { useEffect } from "react"

import authService from "./../../utils/services/auth-service"

const AppLogout = props => {
  useEffect(() => {
    authService.logout()
    props.history.push("/")
  }, [props.history])

  return null
}

export default AppLogout
