import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import marker from '../../../img/ic_marker-active.svg'

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      list: this.props.list
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

  componentDidMount() {
    // console.log('Lat:', this.props.list[0].location.lat)
    // console.log('Long:', this.props.list[0].location.lng)
  }

  render() {
    return (
      <Map
        className="googleMap"
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: localStorage.getItem('lat'),
          lng: localStorage.getItem('lng')
        }}
        zoom={10}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={localStorage.getItem('name')}
          icon={{
            url: marker,
            anchor: new this.props.google.maps.Point(30, 60),
            scaledSize: new this.props.google.maps.Size(60, 60)
          }}
          position={{
            lat: localStorage.getItem('lat'),
            lng: localStorage.getItem('lng')
          }}
        />

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
