import Dropdown from "../Dropdown";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center my-10">
            <h1>NEWS APP</h1>
            <nav>
                <Dropdown />
            </nav>
        </header>
    )
}