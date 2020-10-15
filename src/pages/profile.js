import React, { Component } from "react"
import "./style.css"
import Layout from "../components/layout"
import ProfileEditComponent from "../components/profileEditComponent"
import ProfileComponent from "../components/profileComponent"
import ProfileEditDescription from "../components/profileEditDescription"
import ProfileDescription from "../components/profileDescription"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          website: "external",
          source: "www.jerrypallath.com",
        },
        {
          website: "youtube",
          source: "www.youtube.com/jpallath",
        },
        {
          website: "patreon",
          source: "www.patreon.com/jpallath",
        },
      ],
      edit: false,
      user: {
        name: "Jerry Pallath",
        description:
          "Well hello there to my little lincoln bits page. I'd like this to be a boilerplate before i start adding real data into this application from a backend",
      },
    }
    this.enterEditMode = this.enterEditMode.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleAddPortal = this.handleAddPortal.bind(this)
  }

  enterEditMode(e) {
    e.preventDefault()
    this.setState(state => ({ edit: !state.edit }))
  }
  handleUpdate(e) {
    e.preventDefault()
    this.setState(state => ({ edit: !state.edit }))
  }

  handleAddPortal = () => {
    let links = this.state.links.concat({
      website: null,
      source: "",
    })
    this.setState({ links })
  }
  updateWebsite = (website, linkIndex) => {
    let { links } = this.state
    links[linkIndex].website = website
    this.setState({ links })
  }
  addSource = () => {
    console.log("okay")
  }
  render() {
    let { links } = this.state
    let profileComponents
    let profileDescriptionComponent
    let profileButton
    if (this.state.edit) {
      profileDescriptionComponent = (
        <ProfileEditDescription description={this.state.user.description} />
      )
      profileComponents = links.map((link, index) => (
        <ProfileEditComponent
          key={index}
          index={index}
          profileItem={link}
          addSource={() => this.addSource()}
          updateWebsite={website => this.updateWebsite(website, index)}
        />
      ))
      profileButton = (
        <div className="buttons">
          <button onClick={this.handleAddPortal}>Add Portal</button>
          <button onClick={this.handleUpdate}>Update</button>
        </div>
      )
    } else {
      profileDescriptionComponent = (
        <ProfileDescription description={this.state.user.description} />
      )
      profileComponents = links.map((link, index) => (
        <ProfileComponent key={index} profileItem={link} />
      ))
      profileButton = (
        <div className="buttons">
          <button onClick={this.enterEditMode}>Edit</button>
        </div>
      )
    }
    return (
      <Layout>
        <div className="profile">
          <h1>Profile</h1>
          {profileDescriptionComponent}
          <ul className="sites">{profileComponents}</ul>
          {profileButton}
        </div>
      </Layout>
    )
  }
}

export default Profile
