import React, { Component } from "react"

class ProfileEditComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      websites: ["external", "youtube", "patreon", "facebook", "linkedin"],
    }
  }
  updateWebsite = e => {
    this.props.updateWebsite(e.target.value)
  }
  render() {
    let { source, website } = this.props.profileItem
    let { addSource } = this.props
    let addButton
    if (website === null) {
      addButton = <button onClick={addSource}>Add</button>
    }
    let websites = this.state.websites.map((site, index) => {
      return (
        <option key={index} value={site}>
          {site}
        </option>
      )
    })
    return (
      <li>
        <select
          name="sites"
          id="sites"
          defaultValue={website}
          onChange={this.updateWebsite}
        >
          {websites}
        </select>
        <input
          type="text"
          value={source}
          onChange={() => console.log("okay")}
        />
        {addButton}
      </li>
    )
  }
}

export default ProfileEditComponent
