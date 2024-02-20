import React from 'react';
import ReactPaginate from 'react-paginate';

  

const Paginate = ({pageNumber, info, updatePageNumber}) => {


    let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  };
  return (
    <div>
     <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary page-link fs-5"
        nextClassName="btn btn-primary fs-5 page-link"
        activeClassName="active"
        pageCount={info.pages || 1}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </div>
  )
}

export default Paginate;
