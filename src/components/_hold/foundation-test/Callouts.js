import React, { Component } from 'react'
import { Callout, Colors, Sizes } from 'react-foundation'

class Callouts extends Component {
  render() {
    return (
      <div id="Callouts">
        <h2>Callouts</h2>
        <h3>Basics</h3>
        <div className="callout-basics-example">
          <Callout>
            <h5>This is a callout.</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a>It's dangerous to go alone, take this.</a>
          </Callout>
        </div>
        <h3>Colors</h3>
        <div className="callout-colors-example">
          <Callout color={Colors.SECONDARY}>
            <h5>This is a secondary panel</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a href="/">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={Colors.PRIMARY}>
            <h5>This is a primary panel</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a href="/">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={Colors.SUCCESS}>
            <h5>This is a success panel</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a href="/">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={Colors.WARNING}>
            <h5>This is a warning panel</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a href="/">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={Colors.ALERT}>
            <h5>This is an alert panel</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a href="/">It's dangerous to go alone, take this.</a>
          </Callout>
        </div>
        <h3>Sizes</h3>
        <div className="callout-sizes-example">
          <Callout size={Sizes.SMALL}>
            <h5>This is a secondary panel</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a href="/">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout size={Sizes.LARGE}>
            <h5>This is a secondary panel</h5>
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <a href="/">It's dangerous to go alone, take this.</a>
          </Callout>
        </div>
      </div>
    )
  }
}

export default Callouts
