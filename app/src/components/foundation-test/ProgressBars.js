import React, { Component } from 'react'
import { Progress, Colors } from 'react-foundation'

class ProgressBars extends Component {
  render() {
    return (
      <div id="ProgressBars">
        <h2>Progress Bars</h2>

        <h3>Basics</h3>
        <div className="progress-basics-example">
          <Progress tabIndex="0" value={0} />
          <Progress tabIndex="0" value={50} />
        </div>

        <h3>Colors</h3>
        <div className="progress-colors-example">
          <Progress
            color={Colors.SECONDARY}
            tabIndex="0"
            min={0}
            max={100}
            value={25}
            valueText="25 percent"
          />
          <Progress color={Colors.SUCCESS} value={50} />
          <Progress color={Colors.WARNING} value={50} />
          <Progress color={Colors.ALERT} value={75} />
        </div>

        <h3>With Text</h3>
        <div className="progress-with-text-example">
          <Progress
            meter={{ text: '25%' }}
            tabIndex="0"
            min={0}
            max={100}
            value={25}
            valueText="25 percent"
          />
        </div>
      </div>
    )
  }
}

export default ProgressBars
