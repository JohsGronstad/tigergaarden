import Image from "next/image";
import DarkModeIcon from "./DarkModeIcon";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 w-full fixed top-0 left-0 z-50 shadow-md font-mono dark:bg-gray-950">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="flex items-center ml-10  dark:hidden">
              <Image
                src="/tiger-black.png"
                alt="Your Image Description"
                width={64}
                height={64}
              />
              <span>Tigergården</span>
            </a>
            <a href="#" className="dark:flex items-center ml-10 hidden text-stone-100">
              <Image
                src="/tiger-white.png"
                alt="Your Image Description"
                width={64}
                height={64}
              />
              <span>Tigergården</span>
            </a>
          </div>
          
          <div className="flex items-center mr-10">
          <DarkModeIcon/>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={"black"}
                className="w-8 h-8 block dark:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-8 h-8 hidden dark:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
