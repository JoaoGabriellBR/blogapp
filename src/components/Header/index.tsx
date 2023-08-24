"use client";

import Dropdown from "../Dropdown";
import DropdownMobile from "../DropdownMobile";
import { TbWorldBolt } from "react-icons/tb";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-7 w-full relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center space-x-1" data-aos="fade-right">
          <TbWorldBolt className="text-indigo-400 text-[1rem] font-bold" />
          <Link href="/">
            <h1 className="font-black cursor-pointer">
              World<span className="font-extralight">News</span>
            </h1>
          </Link>
        </div>
        <nav className="hidden md:flex" data-aos="fade-right">
          <Dropdown />
        </nav>
        <DropdownMobile />
      </div>
    </header>
  );
}
