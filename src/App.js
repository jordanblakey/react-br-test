import 'foundation-icons/foundation-icons.css'
import './css/App.css'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Navigation
import SplashScreen from './components/SplashScreen'
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
        <SplashScreen />
        <Navbar />
        <div className="page">
          <Route path="/map" component={GMap} />
          <Route exact path="/" component={Lunch} />
          <Route path="/internets" component={Internets} />
        </div>
        <FooterNav />
      </div>
    )
  }
}

export default App
