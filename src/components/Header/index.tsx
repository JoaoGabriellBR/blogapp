"use client";

import Dropdown from "../Dropdown";
import DropdownMobile from "../DropdownMobile";
import { TbWorldBolt } from "react-icons/tb";
import Link from "next/link";
import { useNewsCategory } from "@/context";
import { postCategories } from "@/services/postCategories";

export default function Header() {

  const { updateNewsCategory, setCurrentPage }: any = useNewsCategory();

  const handleClickCategory = (value: string) => {
    updateNewsCategory(value);
    setCurrentPage(1);
  }

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

        <nav className="flex" data-aos="fade-right">
          {postCategories?.slice(0, 5)?.map((category) => (
            <p
              key={category?.value}
              onClick={() => handleClickCategory(category?.value)}
              className="hidden md:flex text-sm px-4 py-2 hover:text-white cursor-pointer">{category?.title}
            </p>
          ))}
          <Dropdown />
        </nav>

        <nav className="hidden md:flex" data-aos="fade-right">
        </nav>

        <DropdownMobile />
      </div>
    </header>
  );
}
