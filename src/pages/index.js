import React, { Component } from "react"
import "./style.css"
import Layout from "../components/layout"
import NewBookmark from "../components/newBookmark"
import Timer from "../components/timer"

class Bookmarks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmarks: [
        {
          source:
            "https://www.msnbc.com/all-in/watch/chris-hayes-explains-how-trump-is-using-doj-to-manufacture-voter-fraud-scandal-92573253769",
          title:
            "Chris Hayes explains how Trump is using DOJ to manufacture voter fraud scandal",
          image:
            "https://media14.s-nbcnews.com/j/MSNBC/Components/Video/202009/n_hayes_chrisopen_200925_1920x1080.nbcnews-fp-1200-630.jpg",
          time: "Sat Oct 04 2020 12:42:02 GMT-0400 (Eastern Daylight Time)",
        },
        {
          source:
            "https://www.reddit.com/r/Drizzy/comments/j07r54/new_pickup_came_in_this_morning_really_excited_i/",
          title:
            "new pickup came in this morning! really excited i found this especially since personally i think this album is top 3 in Drakes discography really amazing album happy to have this!",
          image:
            "https://preview.redd.it/kppx7qfmdip51.jpg?width=576&auto=webp&s=4e49e6e0d76f54bd70260facac184ef6ac598b68",
          time: "Sat Oct 04 2020 08:42:02 GMT-0400 (Eastern Daylight Time)",
        },
      ],
    }
  }
  handleSubmit() {
    let object = {
      source:
        "https://www.reddit.com/r/Drizzy/comments/j9u3y9/happy_birthday_boi1da/",
      title: "Happy Birthday Boi-1da",
      image: "https://i.redd.it/0ilsfjuexos51.jpg",
      time: "Sat Oct 04 2020 08:42:02 GMT-0400 (Eastern Daylight Time)",
    }
    this.setState({ bookmarks: [object, ...this.state.bookmarks] })
  }
  render() {
    let bookmarks = this.state.bookmarks.map((bookmark, index) => {
      let currentTime = new Date().getHours()
      let time = currentTime - new Date(bookmark.time).getHours()
      return (
        <a href={bookmark.source} target="_blank" rel="noreferrer" key={index}>
          <li className="bookmark-entry">
            <div className="bookmark-image-container">
              <img src={bookmark.image} alt={bookmark.title} />
            </div>
            <Timer hours={time.toString()} title={bookmark.title} />
            <p className="bookmark-text">{bookmark.title}</p>
          </li>
        </a>
      )
    })

    return (
      <Layout>
        <NewBookmark handleSubmit={() => this.handleSubmit()} />
        <ul className="bookmarks">{bookmarks}</ul>
      </Layout>
    )
  }
}

export default Bookmarks
