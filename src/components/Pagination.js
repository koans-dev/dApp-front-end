import React from "react";

function Pagination({ rowPerPage, totalRows,paginate }) {
  const pageNumber = [];
  for (let index = 1; index < Math.ceil(totalRows / rowPerPage); index++) {
    pageNumber.push(index);
  }
  return (
    <div className=" w-full mx-auto bg-gray-100 flex  justify-center mx-autoitems-center space-x-0 ">
      {pageNumber.map((number) => (
        <a onClick={()=>paginate(number)}
          href="#"
          className="py-2 px-2 leading-tight text-gray-500 bg-white border border-gray-100 hover:bg-green-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {number}
        </a>
      ))}
    </div>
  );
}

export default Pagination;
