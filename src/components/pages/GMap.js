import React, { Component } from 'react'
import { Row } from 'react-foundation'
import request from 'request'

import CustomMap from './maps/CustomMap'
import Lunch from './Lunch'

class GMap extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }

    this.handleDrawerClick = this.handleDrawerClick.bind(this)
  }

  componentDidMount() {
    request(
      'https://s3.amazonaws.com/bottle-rocket/restaurants.json',
      { json: true },
      (err, res, body) => {
        if (err) {
          return console.log(err)
        }
        let list = Object.entries(body)[0][1]
        // console.log(list[cur].location.formattedAddress[0])
        // console.log(list[cur].location.formattedAddress[1])
        // console.log(list[cur].location.formattedAddress[2])
        // console.log(list[cur].contact)
        let cur = 0
        if (window.location.href.split('/').pop() !== 'map') {
          cur = window.location.href.split('/').pop()
        }

        if (!list[cur].contact) {
          list[cur].contact = {
            formattedPhone: '',
            twitter: '',
            facebookUsername: ''
          }
        }
        console.log(JSON.stringify(list, null, 2))

        let output = `
            <div class="columns small-12 selectedRestaurant">
              <h2>${list[cur].name}</h2>
              <h3>${list[cur].category}</h3>
              </div>
              <div class="columns small-12 selectedRestaurantInfo">
              <p>
              ${list[cur].location.formattedAddress[0]} <br />
              ${list[cur].location.formattedAddress[1]} <br />
              ${list[cur].location.formattedAddress[2]} <br />
              </p>
              <p>${list[cur].contact.formattedPhone}</p>
              <p>${
                list[cur].contact.twitter !== '' &&
                list[cur].contact.twitter !== undefined
                  ? 'Twitter: ' + list[cur].contact.twitter
                  : ''
              } </p>
              <p>${
                list[cur].contact.facebookUsename !== '' &&
                list[cur].contact.facebookUsename !== undefined
                  ? 'Facebook: ' + list[cur].contact.facebookUsername
                  : ''
              } </p>
            </div>
          `

        this.setState({
          list: list,
          output: output
        })
        localStorage.removeItem('lng', 'lat', 'name')
        localStorage.setItem('name', this.state.list[cur].name)
        localStorage.setItem('lng', this.state.list[cur].location.lng)
        localStorage.setItem('lat', this.state.list[cur].location.lat)

        // console.log(this.state.list)
        return list
      }
    )
  }

  handleDrawerClick() {
    console.log('Clicked')
    document.getElementById('listDrawer').classList.toggle('openDrawer')
  }
  render() {
    return (
      <div className="mapContainer">
        <CustomMap {...this.state} />
        <Row
          id="restaurantInfo"
          dangerouslySetInnerHTML={{ __html: this.state.output }}
        />
        <div id="listDrawer" onClick={this.handleDrawerClick}>
          <Lunch />
        </div>
      </div>
    )
  }
}

export default GMap
