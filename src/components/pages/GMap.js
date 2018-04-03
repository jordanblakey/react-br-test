import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'

import basicRequest from '../../controllers/basic-request'
import CustomMap from './maps/CustomMap'

class GMap extends Component {
  componentDidMount() {
    basicRequest()
  }

  render() {
    return (
      <div>
        <CustomMap />
        <Row>
          <Column small={12} className="selectedRestaurant">
            <h2>Restaurant Name</h2>
            <h3>Category Type</h3>
          </Column>
          <Column small={12} className="selectedRestaurantInfo">
            <p>
              Address line 1 <br />
              Address line 2
            </p>
            <p>Phone Number</p>
            <p>Social Accounts</p>
          </Column>
          <Column small={12}>
            <div id="response" />
          </Column>
        </Row>
      </div>
    )
  }
}

export default GMap
