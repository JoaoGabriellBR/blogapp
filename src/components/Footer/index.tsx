import { TbWorldBolt } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const divIconsStyle =
    "w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-indigo-500 dark:border-gray-800 dark:bg-neutral-800 border border-gray-100 hover:bg-indigo-500 hover:text-white";
  const iconsStyle = "w-5 h-5 font-bold";

  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto h-[0.1rem] bg-neutral-700"></div>
      <div className="py-14 max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center space-x-1">
          <TbWorldBolt className="text-indigo-400 text-[1rem] font-bold" />
          <h1 className="font-black">
            World<span className="font-extralight">News</span>
          </h1>
        </div>

        <nav className="flex flex-row justify-between items-center space-x-3">
          <div className={divIconsStyle}>
            <MdEmail className={iconsStyle} />
          </div>
          <div className={divIconsStyle}>
            <FaLinkedinIn className={iconsStyle} />
          </div>
          <div className={divIconsStyle}>
            <FaGithub className={iconsStyle} />
          </div>
        </nav>
      </div>
    </footer>
  );
}
