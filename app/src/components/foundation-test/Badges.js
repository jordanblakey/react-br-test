import React, { Component } from 'react'
import { Badge, Colors, Icon } from 'react-foundation'

class Badges extends Component {
  render() {
    return (
      <div id="Badges">
        <h2>Badges</h2>

        <h3>Basics</h3>
        <div className="badge-basics-example">
          <Badge>1</Badge>
        </div>

        <h3>Coloring</h3>
        <div className="badge-colors-example">
          <Badge color={Colors.SECONDARY}>2</Badge>
          <Badge color={Colors.SUCCESS}>3</Badge>
          <Badge color={Colors.ALERT}>A</Badge>
          <Badge color={Colors.WARNING}>B</Badge>
        </div>

        <h3>With Icons</h3>
        <div className="badge-icons-example">
          <Badge color={Colors.INFO}>
            <Icon name="fi-share" />
          </Badge>
          <Badge color={Colors.SUCCESS}>
            <Icon name="fi-check" />
          </Badge>
          <Badge color={Colors.WARNING}>
            <Icon name="fi-wrench" />
          </Badge>
        </div>
      </div>
    )
  }
}

export default Badges
