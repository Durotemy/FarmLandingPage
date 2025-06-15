import { useState } from "react";
import { navBarItem } from "../contants.ts";
import { CiShoppingCart } from "react-icons/ci";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-green-600">SolaFarm</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navBarItem.map((ele) => (
              <a
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                href={ele.path}
              >
                {ele.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center hover:cursor-pointer hover:text-green-600">
            <CiShoppingCart size={30} />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navBarItem.map((ele) => (
            <a
              href={ele.path}
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {ele.name}
            </a>
          ))}
        </div>
        <div className="px-5 flex flex-row items-center px-4 hover:text-green-600">
          <CiShoppingCart size={30} />
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
};
