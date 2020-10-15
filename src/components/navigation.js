import React, { Component } from "react"
import { Link } from "gatsby"
import "../pages/style.css"

class Navigation extends Component {
  render() {
    return (
      <ul className="navigation">
        <li>
          <Link to="/">Bookmarks</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    )
  }
}

export default Navigation
