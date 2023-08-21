import { TbWorldBolt } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {

  const divIconsStyle =
    "w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-indigo-500 dark:border-gray-800 dark:bg-neutral-800 border border-gray-100 hover:bg-indigo-500 hover:text-white";
  const iconsStyle = "w-5 h-5 font-bold";

  const email = "mailto:joaoname9@gmail.com";
  const linkedin = "https://www.linkedin.com/in/joaogabriel-silva";
  const gitHub = "https://github.com/JoaoGabriellBR";

  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto h-[0.1rem] bg-neutral-700"></div>

      <div className="py-14 max-w-6xl px-0 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center space-x-1">
          <TbWorldBolt className="text-indigo-400 text-[1rem] font-bold" />
          <h1 className="font-black">
            World<span className="font-extralight">News</span>
          </h1>
        </div>

        <nav className="flex flex-row justify-between items-center space-x-3 mt-5 md:mt-0">
          <Link href={email}>
            <div className={divIconsStyle}>
              <MdEmail className={iconsStyle} />
            </div>
          </Link>

          <Link href={linkedin} target="blank">
            <div className={divIconsStyle}>
              <FaLinkedinIn className={iconsStyle} />
            </div>
          </Link>

          <Link href={gitHub} target="blank">
            <div className={divIconsStyle}>
              <FaGithub className={iconsStyle} />
            </div>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
