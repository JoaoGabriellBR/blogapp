import { TbWorldBolt } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const divIconsStyle =
    "w-8 h-8 flex justify-center items-center bg-indigo-500 rounded-full cursor-pointer";
  const iconsStyle = "w-4 h-4 font-bold text-white";

  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto h-[0.1rem] bg-neutral-700"></div>
      <div className="py-7 max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
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
