import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

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
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
