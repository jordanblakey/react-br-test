import React, { Component } from 'react'
import { Breadcrumbs, BreadcrumbItem, Inline } from 'react-foundation'

class Breadcrumb extends Component {
  render() {
    return (
      <div id="Breadcrumbs">
        <h2>Breadcrumbs</h2>
        <div className="breadcrumbs-example">
          <div aria-label="You are here:" role="navigation">
            <Breadcrumbs>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Features</a>
              </BreadcrumbItem>
              <BreadcrumbItem isDisabled>Gene Splicing</BreadcrumbItem>
              <BreadcrumbItem>
                <Inline showForSr>Current: </Inline> Cloning
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>
    )
  }
}

export default Breadcrumb
