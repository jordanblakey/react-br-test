import React, { Component } from 'react'
import { Menu, MenuItem, MenuText, Icon } from 'react-foundation'
import { Alignments } from 'react-foundation'

class Menus extends Component {
  render() {
    return (
      <div id="Menus">
        <h2>Menus</h2>
        <h3>Basics</h3>
        <div className="menu-basics-example">
          <Menu>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
            <MenuItem>
              <a>Four</a>
            </MenuItem>
          </Menu>
        </div>
        <h3>Item Alignment</h3>
        <div className="menu-item-alignment-example">
          <Menu alignment={Alignments.RIGHT}>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
            <MenuItem>
              <a>Four</a>
            </MenuItem>
          </Menu>
          <Menu alignment={Alignments.CENTER}>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
            <MenuItem>
              <a>Four</a>
            </MenuItem>
          </Menu>
          <Menu isExpanded>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
          </Menu>
          <Menu isExpanded>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
          </Menu>
          <Menu isExpanded>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
            <MenuItem>
              <a>Four</a>
            </MenuItem>
          </Menu>
        </div>
        <h3>Vertical Menu</h3>
        <div className="menu-vertical-example">
          <Menu isVertical>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
            <MenuItem>
              <a>Four</a>
            </MenuItem>
          </Menu>
        </div>
        <h3>Simple Style</h3>
        <div className="menu-simple-example">
          <Menu isSimple>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
            <MenuItem>
              <a>Four</a>
            </MenuItem>
          </Menu>
        </div>
        <h3>Nested Style</h3>
        <div className="menu-nested-example">
          <Menu isVertical>
            <MenuItem>
              <a>One</a>
              <Menu isVertical isNested>
                <MenuItem>
                  <a>One</a>
                </MenuItem>
                <MenuItem>
                  <a>Two</a>
                </MenuItem>
                <MenuItem>
                  <a>Three</a>
                </MenuItem>
                <MenuItem>
                  <a>Four</a>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
            <MenuItem>
              <a>Four</a>
            </MenuItem>
          </Menu>
        </div>
        <h3>Active State</h3>
        <div className="menu-active-state-example">
          <Menu>
            <MenuItem isActive>
              <a>Home</a>
            </MenuItem>
            <MenuItem>
              <a>About</a>
            </MenuItem>
            <MenuItem>
              <a>Nachos</a>
            </MenuItem>
          </Menu>
        </div>
        <h3>Active State (Text Only)</h3>
        <div className="menu-active-state-example">
          <Menu>
            <MenuText>Site Title</MenuText>
            <MenuItem>
              <a>One</a>
            </MenuItem>
            <MenuItem>
              <a>Two</a>
            </MenuItem>
            <MenuItem>
              <a>Three</a>
            </MenuItem>
          </Menu>
        </div>
        <h3>Menu Icons Example</h3>
        <div className="menu-icons-example">
          <Menu>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>One</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>Two</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>Three</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>Four</span>
              </a>
            </MenuItem>
          </Menu>
          <Menu iconsOnTop>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>One</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>Two</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>Three</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon name="fi-list" /> <span>Four</span>
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Menus
