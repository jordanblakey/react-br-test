import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'
import { Link } from 'react-router-dom'

import icon_back from '../img/ic_webBack@2x.png'
import icon_refresh from '../img/ic_webRefresh@2x.png'
import icon_forward from '../img/ic_webForward@2x.png'
import icon_close from '../img/ic_close@2x.png'
import icon_map from '../img/ic_map@2x.png'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleBackClick = this.handleBackClick.bind(this)
  }
  handleBackClick() {
    window.history.back()
  }

  render() {
    return (
      <Row className="navbar">
        <Column small={3}>
          <div onClick={this.handleBackClick}>
            <img src={icon_back} alt="back icon" className="is-visible" />
          </div>
          <img src={icon_refresh} alt="refresh icon" className="is-hidden" />
          <img src={icon_forward} alt="forward icon" className="is-hidden" />
          <img src={icon_close} alt="close icon" className="is-hidden" />
        </Column>
        <Column small={6}>
          <Link to="/">
            <h1 className="pageTitle">Lunch Tyme</h1>
          </Link>
        </Column>
        <Column small={3}>
          <Link to="/">
            <img src={icon_map} alt="map icon" />
          </Link>
        </Column>
      </Row>
    )
  }
}

export default Navbar
