import React from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  setCurrentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(totalItems)

  return (
    <div className="pagination-wrap">
      <div
        className="page-nav"
        onClick={() => setCurrentPage((prev) => (prev <= 1 ? prev : prev - 1))}
      >
        Назад
      </div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item`}>
            <a
              href={`!#${number}`}
              className={`page-link ${currentPage === number ? "active" : ""}`}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="page-nav"
        onClick={() =>
          setCurrentPage((prev) =>
            prev >= pageNumbers.length ? prev : prev + 1
          )
        }
      >
        Далее
      </div>
    </div>
  );
};

export default Pagination;
