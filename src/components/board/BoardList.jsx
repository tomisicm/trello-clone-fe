import React from "react"

import BoardCard from "../board/BoardCard"

const List = props => {
  const { items } = props

  return (
    <div className={props.listClasses}>
      {items.length > 0 &&
        items.map(board => (
          <div className={props.itemClassess} key={board.id}>
            <BoardCard board={board} />
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
