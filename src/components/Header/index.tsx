"use client";

import { useState } from "react";
import Dropdown from "../Dropdown";
import { TbWorldBolt } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi"
import { motion, AnimatePresence } from "framer-motion";
import { postCategories } from "@/services/postCategories";

export default function Header() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const openMobileMenu = () => setMobileMenu(!mobileMenu);
  const closeMobileMenu = () => setMobileMenu(false);

  return (
    <header className="py-7 w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center space-x-1">
          <TbWorldBolt className="text-indigo-400 text-[1rem] font-bold" />
          <h1 className="font-black">
            World<span className="font-extralight">News</span>
          </h1>
        </div>

        <nav className="hidden md:flex">
          <Dropdown />
        </nav>

        <div className="md:hidden">
          <button
            onClick={openMobileMenu}
            className="bg-transparent focus:outline-none"
          >
            {!mobileMenu ? <FiMenu className="text-[1.2rem]" /> : null}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              className="w-full absolute dark:bg-neutral-800 top-0 right-0 left-0 border-none z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="w-full flex flex-col pt-7">
                <div className="px-4 pb-2 flex flex-row justify-between items-center">
                  <h1>Categorias</h1>
                  <button
                    onClick={closeMobileMenu}
                    className="bg-transparent focus:outline-none"
                  >
                    <TfiClose className="text-[1rem]" />
                  </button>
                </div>
                <div className="w-full h-[0.1rem] bg-neutral-700"></div>
              </div>

              <ul className="w-full px-4 py-2 text-white">
                {postCategories?.map((category) => (
                  <li
                    key={category?.value}
                    className="text-sm py-2 hover:text-indigo-500 cursor-pointer"
                  >
                    {category?.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
