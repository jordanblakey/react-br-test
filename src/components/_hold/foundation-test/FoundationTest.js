import React, { Component } from 'react'
import Buttons from './Buttons'
import Switches from './Switches'
import Menus from './Menus'
import Paginations from './Paginations'
import Breadcrumb from './Breadcrumb'
import Callouts from './Callouts'
import MediaObjects from './MediaObjects'
import Badges from './Badges'
import Labels from './Labels'
import ProgressBars from './ProgressBars'
import Grids from './Grids'

class FoundationTest extends Component {
  render() {
    return (
      <div id="FoundationTest">
        <h1>Foundation Test</h1>
        <Buttons />
        <Switches />
        <Menus />
        <Paginations />
        <Breadcrumb />
        <Callouts />
        <MediaObjects />
        <Badges />
        <Labels />
        <ProgressBars />
        <Grids />
      </div>
    )
  }
}

export default FoundationTest
