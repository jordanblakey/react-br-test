import React, { Component } from 'react'
import {
  Row,
  Column,
  Block,
  Breakpoints,
  Callout,
  Colors,
  Thumbnail
} from 'react-foundation'

class Grids extends Component {
  render() {
    return (
      <div id="Grids">
        <h2>Grids</h2>

        <h3>Basics</h3>
        <div className="grid-basics-example">
          <Row className="display">
            <Column small={2} large={4}>
              4 columns
            </Column>
            <Column small={4} large={4}>
              4 columns
            </Column>
            <Column small={6} large={4}>
              4 columns
            </Column>
          </Row>
          <Row className="display">
            <Column large={3}>3 columns</Column>
            <Column large={6}>6 columns</Column>
            <Column large={3}>3 columns</Column>
          </Row>
          <Row className="display">
            <Column small={6} large={2}>
              2 columns
            </Column>
            <Column small={6} large={8}>
              8 columns
            </Column>
            <Column small={12} large={2}>
              2 columns
            </Column>
          </Row>
          <Row className="display">
            <Column small={3}>3 columns</Column>
            <Column small={9}>9 columns</Column>
          </Row>
          <Row className="display">
            <Column large={4}>4 columns</Column>
            <Column large={8}>8 columns</Column>
          </Row>
          <Row className="display">
            <Column small={6} large={5}>
              5 columns
            </Column>
            <Column small={6} large={7}>
              7 columns
            </Column>
          </Row>
          <Row className="display">
            <Column large={6}>6 columns</Column>
            <Column large={6}>6 columns</Column>
          </Row>
        </div>

        <h3>Small Grid</h3>
        <div className="grid-small-example">
          <Row className="display">
            <Column small={2}>2 columns</Column>
            <Column small={10}>10 columns</Column>
          </Row>
          <Row className="display">
            <Column small={3}>3 columns</Column>
            <Column small={9}>9 columns</Column>
          </Row>
        </div>

        <h3>Medium Grids</h3>
        <div className="grid-medium-example">
          <Row className="display">
            <Column medium={2}>2 columns</Column>
            <Column medium={10}>10 columns</Column>
          </Row>
          <Row className="display">
            <Column medium={3}>3 columns</Column>
            <Column medium={9}>9 columns</Column>
          </Row>
        </div>

        <h3>Combined Column/Row</h3>
        <div className="grid-column-row-example">
          <Row className="display" isColumn>
            Row column
          </Row>
        </div>

        <h3>Fluid Row</h3>
        <div className="grid-fluid-row-example">
          <Row className="display" isExpanded />
        </div>

        <h3>Nested</h3>
        <div className="grid-nested-example">
          <Row className="display">
            <Column small={8}>
              8
              <Row>
                <Column small={8}>
                  8 Nested
                  <Row>
                    <Column small={8}>8 Nested Again</Column>
                    <Column small={4}>4</Column>
                  </Row>
                </Column>
                <Column small={4}>4</Column>
              </Row>
            </Column>
            <Column small={4}>4</Column>
          </Row>
        </div>

        <h3>Offsets</h3>
        <div className="grid-offset-example">
          <Row className="display">
            <Column large={1}>1</Column>
            <Column large={11}>11</Column>
          </Row>
          <Row className="display">
            <Column large={1}>1</Column>
            <Column large={10} offsetOnLarge={1}>
              10, offset 1
            </Column>
          </Row>
          <Row className="display">
            <Column large={1}>1</Column>
            <Column large={9} offsetOnLarge={2}>
              9, offset 2
            </Column>
          </Row>
          <Row className="display">
            <Column large={1}>1</Column>
            <Column large={8} offsetOnLarge={3}>
              8, offset 3
            </Column>
          </Row>
        </div>

        <h3>Incomplete Rows</h3>
        <div className="grid-end-example">
          <Row className="display-end">
            <Column medium={3}>3</Column>
            <Column medium={3}>3</Column>
            <Column medium={3}>3</Column>
          </Row>
          <Row className="display-end">
            <Column medium={3}>3</Column>
            <Column medium={3}>3</Column>
            <Column medium={3} isLast>
              3 end
            </Column>
          </Row>
        </div>

        <h3>Collapse/Uncollapse Rows</h3>
        <div className="grid-collapse-example">
          <Row uncollapseOnMedium collapseOnLarge>
            <Column small={6}>
              <Callout color={Colors.SECONDARY}>
                <Block showOnlyFor={Breakpoints.SMALL}>
                  On a small screen, I have gutters!
                </Block>
                <Block showOnlyFor={Breakpoints.MEDIUM}>
                  On a medium screen, I have gutters!
                </Block>
                <Block showFor={Breakpoints.LARGE}>
                  On a large screen, I have no gutters!
                </Block>
              </Callout>
            </Column>
            <Column small={6}>
              <Callout color={Colors.SECONDARY}>
                <Block showOnlyFor={Breakpoints.SMALL}>
                  On a small screen, I have gutters!
                </Block>
                <Block showOnlyFor={Breakpoints.MEDIUM}>
                  On a medium screen, I have gutters!
                </Block>
                <Block showFor={Breakpoints.LARGE}>
                  On a large screen, I have no gutters!
                </Block>
              </Callout>
            </Column>
          </Row>
        </div>

        <h3>Block Grids</h3>
        <div className="grid-block-example">
          <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
            <Column isColumn>
              <Thumbnail src="//unsplash.it/300" alt="" />
            </Column>
            <Column isColumn>
              <Thumbnail src="//unsplash.it/300" alt="" />
            </Column>
            <Column isColumn>
              <Thumbnail src="//unsplash.it/300" alt="" />
            </Column>
            <Column isColumn>
              <Thumbnail src="//unsplash.it/300" alt="" />
            </Column>
            <Column isColumn>
              <Thumbnail src="//unsplash.it/300" alt="" />
            </Column>
            <Column isColumn>
              <Thumbnail src="//unsplash.it/300" alt="" />
            </Column>
          </Row>
        </div>

        <h3>Source Ordering</h3>
        <div className="grid-order-example">
          <Row className="display">
            <Column small={10} pushOnSmall={2}>
              10
            </Column>
            <Column small={2} pullOnSmall={10}>
              2, last
            </Column>
          </Row>
          <Row className="display">
            <Column large={9} pushOnLarge={3}>
              9
            </Column>
            <Column large={3} pullOnLarge={9}>
              3, last
            </Column>
          </Row>
          <Row className="display">
            <Column large={8} pushOnLarge={4}>
              8
            </Column>
            <Column large={4} pullOnLarge={8}>
              4, last
            </Column>
          </Row>
          <Row className="display">
            <Column small={5} pushOnSmall={7} medium={7} pushOnMedium={5}>
              7
            </Column>
            <Column small={7} pullOnSmall={5} medium={5} pullOnMedium={7}>
              5, last
            </Column>
          </Row>
          <Row className="display">
            <Column medium={6} pushOnMedium={6}>
              6
            </Column>
            <Column medium={6} pullOnMedium={6}>
              6, last
            </Column>
          </Row>
        </div>
      </div>
    )
  }
}

export default Grids
