import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { postCategories } from "@/services/postCategories";
import { useNewsCategory } from "@/context";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const { updateNewsCategory, setCurrentPage }: any = useNewsCategory();

  const handleClickCategory = (value: string) => {
    updateNewsCategory(value);
    setCurrentPage(1);
    closeDropdown();
  }

  return (
    <div className="relative">
      <motion.p
        onMouseEnter={openDropdown}
        // className="text-md flex flex-row justify-between items-center bg-transparent py-2 px-4 rounded-lg focus:outline-none hover:text-white"
        className="hidden md:flex flex-row justify-between items-center text-sm px-4 py-2 hover:white cursor-pointer"
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
      </motion.p>
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
              {postCategories?.slice(5)?.map((category) => (
                <li
                  key={category?.value}
                  className="text-sm px-4 py-2 hover:text-indigo-500 cursor-pointer"
                  onClick={() => handleClickCategory(category?.value)}
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
