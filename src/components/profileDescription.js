import React, { Component } from "react"

class ProfileDescription extends Component {
  render() {
    let { description } = this.props
    return <p>{description}</p>
  }
}

export default ProfileDescription
