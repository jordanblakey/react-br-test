import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {
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

export default CustomMap
