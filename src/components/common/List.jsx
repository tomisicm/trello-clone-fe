import React from "react"
import { Link } from "react-router-dom"

const List = props => {
  const { items } = props

  return (
    <div className={props.listClasses}>
      {items.length > 1 &&
        items.map(board => (
          <div className={props.itemClassess} key={board.id}>
            <Link to={`/boards/${board.id}`}>{board.name}</Link>
          </div>
        ))}
    </div>
  )
}

List.defaultProps = {
  listClasses: "row my-2",
  itemClassess: ""
}

export default List
