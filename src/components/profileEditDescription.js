import React, { Component } from "react"

class ProfileEditDescription extends Component {
  render() {
    let { description } = this.props
    return <textarea rows="10" cols="25" defaultValue={description} />
  }
}

export default ProfileEditDescription
