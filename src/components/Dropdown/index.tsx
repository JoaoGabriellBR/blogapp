import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { postCategories } from "@/services/postCategories";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative">
      <motion.button
        onMouseEnter={toggleDropdown}
        className="flex flex-row justify-between items-center bg-transparent py-2 px-4 rounded-lg focus:outline-none"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        Categorias
        <motion.span
          className="ml-1"
          initial={{ rotate: 0 }}
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <IoIosArrowDown />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onMouseLeave={closeDropdown}
            className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md border-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <ul className="py-2 text-white dark:bg-neutral-800">
              {postCategories?.map((category) => (
                <li
                  key={category?.value}
                  className="text-sm px-4 py-2 hover:text-indigo-500 cursor-pointer"
                >
                  {category?.title}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;

