import React, { Component } from 'react'
import { Link, Button, ButtonGroup } from 'react-foundation'
import { Colors, Sizes, Breakpoints } from 'react-foundation'

class Buttons extends Component {
  render() {
    return (
      <div id="Buttons">
        <h2>Buttons</h2>
        <h3>Button Basics</h3>
        <div className="button-basics-example">
          <Link>Learn More</Link>
          <Link>View All Features</Link>
          <Button color={Colors.SUCCESS}>Save</Button>
          <Button color={Colors.ALERT}>Delete</Button>
        </div>
        <h3>Button Sizes</h3>
        <div className="button-sizes-example">
          <Link size={Sizes.TINY}>So Tiny</Link>
          <Link size={Sizes.SMALL}>So Small</Link>
          <Link>So Basic</Link>
          <Link size={Sizes.LARGE}>So Large</Link>
          <Link isExpanded>Such Expand</Link>
          <Link size={Sizes.TINY} isExpanded>
            Wow, Small Expand
          </Link>
        </div>
        <h3>Button Colors</h3>
        <div className="button-colors-example">
          <Link color={Colors.PRIMARY}>Primary Color</Link>
          <Link color={Colors.SECONDARY}>Secondary Color</Link>
          <Link color={Colors.SUCCESS}>Success Color</Link>
          <Link color={Colors.ALERT}>Alert Color</Link>
          <Link color={Colors.WARNING}>Warning Color</Link>
          <Link isDisabled>Disabled Button</Link>
        </div>
        <h3>Hollow Button Colors</h3>
        <div className="button-hollow-example">
          <Button color={Colors.PRIMARY} isHollow>
            Primary Color
          </Button>
          <Button color={Colors.SECONDARY} isHollow>
            Secondary Color
          </Button>
          <Button color={Colors.SUCCESS} isHollow>
            Success Color
          </Button>
          <Button color={Colors.ALERT} isHollow>
            Alert Color
          </Button>
          <Button color={Colors.WARNING} isHollow>
            Warning Color
          </Button>
        </div>
        <h3>Dropdown Buttons</h3>
        <div className="button-dropdown-arrows-example">
          <Button size={Sizes.TINY} isDropdown>
            Dropdown Button
          </Button>
          <Button size={Sizes.SMALL} isDropdown>
            Dropdown Button
          </Button>
          <Button isDropdown>Dropdown Button</Button>
          <Button size={Sizes.LARGE} isDropdown>
            Dropdown Button
          </Button>
          <Button isExpanded isDropdown>
            Dropdown Button
          </Button>
        </div>
        <h3>Button Group</h3>
        <div className="button-group-basics-example">
          <ButtonGroup>
            <Link>One</Link>
            <Link>Two</Link>
            <Link>Three</Link>
          </ButtonGroup>
        </div>
        <h3>Small Button Group</h3>
        <div className="button-group-sizes-example">
          <ButtonGroup size={Sizes.SMALL}>
            <Link>Small</Link>
            <Link>Button</Link>
            <Link>Group</Link>
          </ButtonGroup>
        </div>
        <h3>Button Group Colors</h3>
        <div className="button-group-sizes-example">
          <ButtonGroup>
            <Link color={Colors.SECONDARY}>View</Link>
            <Link color={Colors.SUCCESS}>Edit</Link>
            <Link color={Colors.WARNING}>Share</Link>
            <Link color={Colors.ALERT}>Delete</Link>
          </ButtonGroup>
          <ButtonGroup color={Colors.SECONDARY}>
            <Link>Harder</Link>
            <Link>Better</Link>
            <Link>Faster</Link>
            <Link>Stronger</Link>
          </ButtonGroup>
        </div>
        <h3>Full Width Button Group</h3>
        <div className="button-group-expand-example">
          <ButtonGroup isExpanded>
            <Link>Expanded</Link>
            <Link>Button</Link>
            <Link>Group</Link>
          </ButtonGroup>
        </div>
        <h3>Responsive Stacking Button Group</h3>
        <div className="button-group-stack-example">
          <ButtonGroup stackFor={Breakpoints.SMALL}>
            <Link>How</Link>
            <Link>Low</Link>
            <Link>Can</Link>
            <Link>You</Link>
            <Link>Go</Link>
          </ButtonGroup>
        </div>
        {/* <h3>Split Buttons</h3>
        <div className="button-group-split-button-example">
          <ButtonGroup>
            <Link>Primary Action</Link>
            <Link isDropdown isArrowOnly>
              <span className="show-for-sr">Show menu</span>
            </Link>
          </ButtonGroup>
        </div> */}
      </div>
    )
  }
}

export default Buttons
