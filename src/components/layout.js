import React from "react"
import Header from "./header"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Navigation />
    </>
  )
}

export default Layout
