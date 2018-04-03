import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'
import tab_lunch from '../img/tab_lunch@2x.png'
import tab_internets from '../img/tab_internets@2x.png'

class FooterNav extends Component {
  render() {
    return (
      <Row className="footerNav">
        <Column small={6}>
          <img src={tab_lunch} alt="hot dog icon" />
          <br />
          <span>lunch</span>
        </Column>
        <Column small={6} className="inactive">
          <img src={tab_internets} alt="pointing hand icon" />
          <br />
          <span>internets</span>
        </Column>
      </Row>
    )
  }
}

export default FooterNav
