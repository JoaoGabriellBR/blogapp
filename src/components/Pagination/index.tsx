import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PropsPagination } from "@/services/Interfaces";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PropsPagination) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex items-center justify-center mt-4">
      <nav className="bg-transparent inline-flex rounded-md shadow space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex flex-row justify-between items-center px-3 py-2 rounded-r-md dark:border-gray-800 dark:bg-neutral-800 dark:text-white border border-gray-100 ${
            currentPage === 1 && "cursor-not-allowed"
          }`}
        >
          <AiOutlineArrowLeft className="font-bold mr-2" />
          <p>Anterior</p>
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`dark:text-white rounded-full w-[2.5rem] hover:bg-indigo-500 flex flex-row justify-between items-center hidden md:block ${
              currentPage === pageNumber
                ? "bg-indigo-500"
                : "dark:border-gray-800 dark:bg-neutral-800 border border-gray-100"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex flex-row justify-between items-center px-3 py-2 rounded-r-md dark:border-gray-800 dark:bg-neutral-800 dark:text-white border border-gray-100  ${
            currentPage === totalPages && "cursor-not-allowed"
          }`}
        >
          <p>Próxima</p>
          <AiOutlineArrowRight className="font-bold ml-2" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
