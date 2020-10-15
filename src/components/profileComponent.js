import React, { Component } from "react"

class ProfileComponent extends Component {
  render() {
    let { source, website } = this.props.profileItem
    return (
      <li>
        {website} : {source}
      </li>
    )
  }
}

export default ProfileComponent
