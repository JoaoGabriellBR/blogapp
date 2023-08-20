import Dropdown from "../Dropdown";
import { TbWorldBolt } from "react-icons/tb";

export default function Header() {
    return (
      <header className="flex flex-row justify-between items-center my-10">

        <div className="flex flex-row justify-between items-center space-x-1">
          <TbWorldBolt className="text-indigo-400 text-[1rem] font-bold" />
          <h1 className="font-black">
            World<span className="font-extralight">News</span>
          </h1>
        </div>

        <nav>
          <Dropdown />
        </nav>
      </header>
    );
}