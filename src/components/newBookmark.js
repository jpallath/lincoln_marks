import React, { Component } from "react"
import "../pages/style.css"

class NewBookmark extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit() {
    if (this.state.input.length > 0) {
      this.props.handleSubmit(this.state.input)
    }
  }
  handleEnter = e => {
    if (e.charCode === 13) {
      this.handleSubmit()
    }
  }
  handleChange = e => {
    this.setState({ input: e.target.value })
  }
  render() {
    return (
      <div className="new_bookmark">
        <input onKeyPress={this.handleEnter} onChange={this.handleChange} />
        <button className="new_button" onClick={this.handleSubmit}>
          New Mark
        </button>
      </div>
    )
  }
}

export default NewBookmark
