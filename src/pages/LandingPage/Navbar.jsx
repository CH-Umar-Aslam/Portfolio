import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import Button from "../../components/Button";

const Navbar = () => {
  const menueList = [
    {
      id: 1,
      name: "Home",
      icon: "fa-solid fa-home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      icon: "fa-solid fa-user",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      icon: "fa-solid fa-briefcase",
      link: "/services",
    },
    {
      id: 4,
      name: "Portfolio",
      icon: "fa-solid fa-images",
      link: "/portfolio",
    },
    {
      id: 5,
      name: "Blog",
      icon: "fa-solid fa-newspaper",
      link: "/blog",
    },
    {
      id: 6,
      name: "Contact",
      icon: "fa-solid fa-phone",
      link: "/contact",
    },
  ];

  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      {/* <!-- For Mobile Display --> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="src\media\photos\Recgenz logo png 2-07.png"
            className="h-8 mb-3 dark:text-gray-600"
            alt="RecGenz Logo"
          />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden md:block">
            <Button content="Book a Call" />
          </div>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={` ${
            toggleMenu ? "hidden" : "block"
          } flex-col gap-20  items-center justify-between  w-full md:flex md:w-auto md:order-1`}
        >
          <div className="flex flex-col w-full  max-w-auto p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menueList.map((item) => (
              <a
                href={item.link}
                key={item.id}
                className="block py-2 px-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                {item.name}
              </a>
            ))}
            <div className="md:hidden">
              <Button content="Book a Call" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
