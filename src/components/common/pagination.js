import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  let classes = "page-item ";

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const mapPagination = pages.map(page => (
    <li
      key={page}
      className={page === currentPage ? classes + "active" : classes}
    >
      <a className="page-link" onClick={() => onPageChange(page)}>
        {page}
      </a>
    </li>
  ));

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">{mapPagination}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
