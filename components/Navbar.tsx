import Image from "next/image";
import DarkModeIcon from "./DarkModeIcon";
import useDarkModeClass from "../hooks/useDarkModeClass";
import Link from "next/link";

interface NavbarProps {
  setActiveOption: (option: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveOption }) => {

  const handleClick = (option: string) => {
    setActiveOption(option);
  };
  const isDarkMode = useDarkModeClass();
  return (
    <nav className="bg-gray-100 w-full fixed top-0 left-0 z-50 shadow-md font-mono dark:bg-gray-950">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <button className="flex items-center ml-10">
              <div>
                <Image
                  src={isDarkMode ? "/tiger-white.png" : "/tiger-black.png"}
                  alt="Your Image Description"
                  width={64}
                  height={64}
                />
              </div>
              <span className={"dark:text-stone-100 text-black"}>
                Tigergården
              </span>
            </button>
            <button
              onClick={() => handleClick("tigerlosjen")}
              className="ml-12 hover:underline dark:text-white"
            >
              Book tigerlosjen
            </button>
            <button
              onClick={()=> handleClick("plantekasser")}
              className="ml-12 hover:underline dark:text-white"
            >
              Plantekasser
            </button>
          </div>

          <div className="flex items-center mr-10">
            <DarkModeIcon />
            {/* <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={isDarkMode ? "white": "black"}
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar