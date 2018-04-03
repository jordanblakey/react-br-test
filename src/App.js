import 'foundation-icons/foundation-icons.css'
import './css/App.css'

import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

// Navigation
import Navbar from './components/Navbar'
import FooterNav from './components/FooterNav'

// Pages
import GMap from './components/pages/GMap'
import Lunch from './components/pages/Lunch'
import Internets from './components/pages/Internets'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="basicExample">
          <ul>
            <li>
              <Link to="/">Gmap</Link>
            </li>
            <li>
              <Link to="/lunch">Lunch</Link>
            </li>
            <li>
              <Link to="/internets">Internets</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={GMap} />
          <Route path="/lunch" component={Lunch} />
          <Route path="/internets" component={Internets} />
        </div>
        <FooterNav />
      </div>
    )
  }
}

export default App
