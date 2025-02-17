import { useNavigate } from "react-router-dom";
import ProfileImage from "../assets/profile.jpeg";
import React, { useEffect, useState, useRef } from "react";

export default function AdminNavbar({ isNavOpen, toggleNavbar }) {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const navContentRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  useEffect(() => {
    const handleHamburgerClick = () => {
      if (isNavOpen) {
        hamburgerRef.current.classList.remove("hamburger-active");
      } else {
        hamburgerRef.current.classList.add("hamburger-active");
      }
      navMenuRef.current.classList.toggle("nav-open");
      navContentRef.current.classList.toggle("hidden");
      toggleNavbar();
    };
    const hamburgerElement = hamburgerRef.current;
    hamburgerElement.addEventListener("click", handleHamburgerClick);

    return () => {
      hamburgerElement.removeEventListener("click", handleHamburgerClick);
    };
  }, [isNavOpen, toggleNavbar]);

  return (
    <>
      <div className="relative">
        <button
          ref={hamburgerRef}
          id="hamburger"
          name="hamburger"
          type="button"
          className="absolute top-1 left-4 block p-3 z-50"
          aria-label="Toggle navigation menu"
          aria-expanded={isNavOpen}
          onClick={toggleNavbar}
        >
          <span className="hamburger-line origin-top-left transition duration-300 ease-in-out bg-white"></span>
          <span className="hamburger-line transition duration-300 ease-in-out bg-white"></span>
          <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out bg-white"></span>
        </button>

        <div
          ref={navMenuRef}
          id="nav-menu"
          className={`bg-[#02063D] h-[100vh] fixed top-0 left-0 transition-all duration-100 ${
            isNavOpen ? "lg:w-1/4 md:w-1/3" : "w-[80px]"
          }`}
        >
          <div className={`pt-10 ${isNavOpen ? "block" : "invisible"}`}>
            <img
              src={ProfileImage}
              alt=""
              className="rounded-full w-32 h-32 object-cover mx-auto "
            />
            <h1 className="text-white text-center mt-3 font-sans text-2xl font-bold">
              {isNavOpen ? "Admin 1" : ""}
            </h1>
          </div>
          <div className="mt-32 ml-9">
            <div className="flex items-center mb-4">
              <a
                href="/list-customer"
                className="flex items-center cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6 group-hover:stroke-[#84CECF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <h1 className="text-white lg:text-[24px] text-[18px] font-sans ml-3 font-bold  group-hover:text-[#84CECF] group-active:italic relative">
                  {isNavOpen ? "LIST CUSTOMER" : ""}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#84CECF] transition-all duration-500 group-hover:w-full"></span>
                </h1>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <a
                href="/list-transaction"
                className="flex items-center cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6 group-hover:stroke-[#84CECF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
                <h1 className="text-white lg:text-[24px] text-[18px] font-sans ml-3 font-bold group-hover:text-[#84CECF] group-active:italic relative">
                  {isNavOpen ? "LIST TRANSACTION" : ""}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#84CECF] transition-all duration-500 group-hover:w-full"></span>
                </h1>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <a
                href="/pending-admin"
                className="flex items-center cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6 group-hover:stroke-[#84CECF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h1 className="text-white lg:text-[24px] text-[18px] font-sans ml-3 font-bold group-hover:text-[#84CECF] group-active:italic relative">
                  {isNavOpen ? "PENDING" : ""}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#84CECF] transition-all duration-500 group-hover:w-full"></span>
                </h1>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <a
                href="/add-installment"
                className="flex items-center cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6 group-hover:stroke-[#84CECF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>

                <h1 className="text-white lg:text-[24px] text-[18px] font-sans ml-3 font-bold group-hover:text-[#84CECF] group-active:italic relative">
                  {isNavOpen ? "ADD INSTALLMENT" : ""}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#84CECF] transition-all duration-500 group-hover:w-full"></span>
                </h1>
              </a>
            </div>
            <div
              className="flex items-center mb-4 mt-80"
              onClick={handleLogout}
            >
              <a className="flex items-center cursor-pointer group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6 group-hover:stroke-[#ce0e0e]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <h1 className="text-white lg:text-[24px] md:text-[18px] font-sans ml-3 font-bold group-hover:text-[#ce0e0e]">
                  {isNavOpen ? "LOGOUT" : ""}
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
