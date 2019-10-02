import React, { Component } from "react"

class BoardCard extends Component {
  state = {}
  render() {
    return () => (
      <div className="card border-success mb-3" style="max-width: 18rem;">
        <div className="card-header">Header</div>
        <div className="card-body text-success">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    )
  }
}

export default BoardCard
