import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

import basicRequest from '../../controllers/basic-request'

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map
        className="googleMap"
        google={this.props.google}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

const CustomMap = GoogleApiWrapper({
  apiKey: 'AIzaSyCLzOHdOlsOCRtEsDkNsJO5cZtu79vyxr4'
})(MapContainer)

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
