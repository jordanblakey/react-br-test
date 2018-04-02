import React, { Component } from 'react'
import { Switch, InputTypes } from 'react-foundation'
import { Sizes } from 'react-foundation'

class Switches extends Component {
  render() {
    return (
      <div id="Switches">
        <h2>Switches</h2>
        <h3>Basics</h3>
        <div className="switch-basics-example">
          <Switch />
        </div>
        <h3>Radio Switch</h3>
        <div className="switch-radio-example">
          <Switch
            input={{
              type: InputTypes.RADIO,
              name: 'testGroup',
              defaultChecked: true
            }}
          />
          <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }} />
          <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }} />
        </div>
        <div className="switch-radio-example">
          <Switch size={Sizes.TINY} />
          <Switch size={Sizes.SMALL} />
          <Switch size={Sizes.LARGE} />
        </div>
        <div className="switch-inner-label-example">
          <p>Do you like me?</p>
          <Switch
            size={Sizes.LARGE}
            active={{ text: 'Yes' }}
            inactive={{ text: 'No' }}
          />
        </div>
      </div>
    )
  }
}

export default Switches
