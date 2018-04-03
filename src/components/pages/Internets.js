import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Internets extends Component {
  render() {
    return (
      <div className="internets">
        <h1>Loading...</h1>
        <Iframe
          url="https://www.bottlerocketstudios.com/contact"
          width="100%"
          height="100vh"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    )
  }
}

export default Internets
