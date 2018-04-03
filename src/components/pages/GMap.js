import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'

import basicRequest from '../../controllers/basic-request'

class GMap extends Component {
  render() {
    return (
      <Row>
        <Column small={12}>
          <h1>Google Map</h1>
          <div id="response" />
        </Column>
      </Row>
    )
  }
}

basicRequest()

export default GMap
