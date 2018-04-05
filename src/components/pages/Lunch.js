import React, { Component } from 'react'
import request from 'request'

class Lunch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      output: ``
    }
  }

  componentWillMount() {
    request(
      'https://s3.amazonaws.com/bottle-rocket/restaurants.json',
      { json: true },
      (err, res, body) => {
        if (err) {
          return console.log(err)
        }
        let list = Object.entries(body)[0][1]
        let output = ``
        for (let i = 0; i < list.length; i++) {
          output += `
            <a class="restaurantListItem columns small-12" href="/map/${i}">
              <img src="${list[i].backgroundImageURL}" />
              <h2>${list[i].name}</h2>
              <h3>${list[i].category}</h3>
              </a>
            </a>
          `

          this.setState({ output: output })
        }
      }
    )
  }

  render() {
    return (
      <div
        className="row small-collapse lunch"
        dangerouslySetInnerHTML={{ __html: this.state.output }}
      />
    )
  }
}

export default Lunch
