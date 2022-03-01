import React from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  onPageChange: (selectedItem: { selected: number; }) => void,
  pageCount: number
}

const Paginate = ({ onPageChange, pageCount }: Props) => {
  return (
    <ReactPaginate
      className="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      disabledClassName="page-item disabled"
      disabledLinkClassName="page-link"
      activeClassName="page-item disabled"
      activeLinkClassName="page-link"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
    />
  )
}

export default Paginate;