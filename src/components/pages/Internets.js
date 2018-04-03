import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Internets extends Component {
  render() {
    return (
      <div className="internets">
        <div className="subpageLoader">
          <div className="container">
            <div className="loader" />
          </div>
        </div>
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
