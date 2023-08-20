import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { postCategories } from "@/services/postCategories";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex flex-row justify-between items-center bg-transparent py-2 px-4 rounded-lg focus:outline-none"
      >
        Categorias
        <IoIosArrowDown className="ml-1" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md">
          <ul className="py-2 text-black">
            {postCategories?.map((category) => (
              <li
                key={category?.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {category?.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
