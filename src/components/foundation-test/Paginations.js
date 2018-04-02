import React, { Component } from 'react'
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Inline
} from 'react-foundation'

class Paginations extends Component {
  render() {
    return (
      <div id="Paginations">
        <h2>Pagination</h2>
        <h3>Basics</h3>
        <div className="pagination-basics-example">
          <Pagination aria-label="Pagination">
            <PaginationPrevious isDisabled>
              Previous <Inline showForSr>page</Inline>
            </PaginationPrevious>
            <PaginationItem isCurrent>
              <Inline showForSr>You're on page</Inline> 1
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 2">2</a>
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 3">3</a>
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 4">4</a>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>
              <a aria-label="Page 12">12</a>
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 13">13</a>
            </PaginationItem>
            <PaginationNext>
              <a aria-label="Next page">
                Next <Inline showForSr>page</Inline>
              </a>
            </PaginationNext>
          </Pagination>
          <h3>Centered</h3>
        </div>
        <div className="pagination-center-example">
          <Pagination aria-label="Pagination" isCentered>
            <PaginationPrevious isDisabled>
              Previous <Inline showForSr>page</Inline>
            </PaginationPrevious>
            <PaginationItem isCurrent>
              <Inline showForSr>You're on page</Inline> 1
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 2">2</a>
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 3">3</a>
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 4">4</a>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>
              <a aria-label="Page 12">12</a>
            </PaginationItem>
            <PaginationItem>
              <a aria-label="Page 13">13</a>
            </PaginationItem>
            <PaginationNext>
              <a aria-label="Next page">
                Next <Inline showForSr>page</Inline>
              </a>
            </PaginationNext>
          </Pagination>
        </div>
      </div>
    )
  }
}

export default Paginations
