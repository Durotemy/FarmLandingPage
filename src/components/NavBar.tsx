import { useState } from "react";
import { navBarItem } from "../contants.ts";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <span className="text-xl font-bold text-green-600">
                  SolaFarm
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navBarItem.map((ele) => {
              const isActive = location.pathname === ele.path;
              return (
                <Link
                  key={ele.name}
                  to={ele.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-green-100 text-green-700 font-bold"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {ele.image && (
                    <img
                      src={ele.image}
                      alt={ele.name}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  <span>{ele.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center hover:cursor-pointer hover:text-green-600 relative">
            <Link to="/cart">
              <CiShoppingCart size={30} />
              {cartItems.length > 0 && (
                <span className="absolute top-2 left-5 bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
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
          {navBarItem.map((ele) => {
            const isActive = location.pathname === ele.path;
            return (
              <Link
                key={ele.name}
                to={ele.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-green-100 text-green-700 font-bold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {ele.image && (
                  <img
                    src={ele.image}
                    alt={ele.name}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <span>{ele.name}</span>
              </Link>
            );
          })}
        </div>
        <div className="px-5 flex flex-row items-center px-4 hover:text-green-600 relative">
          <Link
            to="/cart"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <CiShoppingCart size={30} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -left-45 bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
            <p className="ml-2">Cart</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
