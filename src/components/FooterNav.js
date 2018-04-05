import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'
import { Link } from 'react-router-dom'

import tab_lunch from '../img/tab_lunch@2x.png'
import tab_internets from '../img/tab_internets@2x.png'

class FooterNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lunchActive: false,
      internetsActive: false
    }
    this.handleLunchClick = this.handleLunchClick.bind(this)
    this.handleInternetsClick = this.handleInternetsClick.bind(this)
  }

  componentWillMount() {
    if (
      window.location.href.split('/').pop() === '' &&
      this.state.lunchActive === false
    ) {
      this.setState({ lunchActive: true })
    }

    if (
      window.location.href.split('/').pop() === 'internets' &&
      this.state.internetsActive === false
    ) {
      this.setState({ internetsActive: true })
    }
  }

  componentDidUpdate() {
    if (
      window.location.href.split('/').pop() !== 'internets' &&
      this.state.internetsActive === true
    ) {
      this.setState({ internetsActive: false })
    }

    if (
      window.location.href.split('/').pop() !== '' &&
      this.state.lunchActive === true
    ) {
      this.setState({ lunchActive: false })
    }
  }

  handleLunchClick() {
    this.setState({ lunchActive: true, internetsActive: false })
  }

  handleInternetsClick() {
    this.setState({ lunchActive: false, internetsActive: true })
  }

  render() {
    return (
      <Row className="footerNav">
        <Column
          small={6}
          onClick={this.handleLunchClick}
          className={this.state.lunchActive ? null : 'inactive'}
        >
          <Link to="/">
            <img src={tab_lunch} alt="hot dog icon" />
            <br />
            <span>lunch</span>
          </Link>
        </Column>
        <Column
          small={6}
          onClick={this.handleInternetsClick}
          className={this.state.internetsActive ? null : 'inactive'}
        >
          <Link to="/internets">
            <img src={tab_internets} alt="pointing hand icon" />
            <br />
            <span>internets</span>
          </Link>
        </Column>
      </Row>
    )
  }
}

export default FooterNav
