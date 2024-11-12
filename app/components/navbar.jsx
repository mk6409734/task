"use client";

import { useState } from "react";

export const Navbar = () => {
  const [display, setdisplay] = useState(false);
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-between px-4 py-3  text-white font-urbanist">
        {/* Brand Section */}
        <div className="flex items-center">
          <h1 className="text-6xl font-bold">V</h1>
          <div>
            <h2 className="text-4xl font-bold">YB</h2>
            <h3 className="text-xs -mt-1 ml-1">STORE</h3>
          </div>
        </div>

        {/* Search Input */}
        <div className=" w-full ml-5 md:w-auto mt-3 md:mt-0 relative">
          <input
            className="text-gray-900 p-3 pl-10 rounded-full w-full md:w-80"
            type="text"
            placeholder="Search Creator/Product"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* Navigation Links */}
        <button
          onClick={() => settoggle(!toggle)}
          className="lg:hidden block text-white focus:outline-none ml-5"
          aria-label="Toggle navigation menu"
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        <div className="hidden sm:hidden md:hidden lg:flex mx-7  mt-3 md:mt-0">
          <ul className="flex space-x-8 text-2xl  font-bold">
            <li className="hover:text-gray-400 cursor-pointer">Fav Creators</li>
            <li className="hover:text-gray-400 cursor-pointer">Merchandise</li>
            <li className="hover:text-gray-400 cursor-pointer">Brand</li>
            <li className="hover:text-gray-400 cursor-pointer">Digital</li>
          </ul>
        </div>

        {/* Profile Button */}
        <div className="hidden sm:hidden md:hidden lg:flex relative ">
          <button
            onClick={() => setdisplay(!display)}
            className="py-2 px-4 w-[100px] h-[41px] bg-white text-black rounded-xl flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-3 h-3 ml-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {display && (
            <div className="absolute left-2 mt-12 bg-black text-white divide-y rounded-lg shadow-lg w-36">
              <ul className="py-2 text-sm">
                <li>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                    My Store
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`flex md:flex-col lg:hidden w-full bg-black text-white text-center space-y-4 text-lg font-bold transition-all duration-300 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <li className="hover:text-gray-400 cursor-pointer">Fav Creators</li>
        <li className="hover:text-gray-400 cursor-pointer">Merchandise</li>
        <li className="hover:text-gray-400 cursor-pointer">Brand</li>
        <li className="hover:text-gray-400 cursor-pointer">Digital</li>
      </ul>
    </>
  );
}; 