"use client";
import Image from "next/image";
import "../globals.css";
import React, { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-[#000319] z-50 fixed px-5 lg:px-8 xl:px-[8%] backdrop-blur `}
      >
        <div className="navbar flex items-center justify-between z-50 mt-2 mb-2 ">
          <div className="logo">
            <h1 className="text-2xl font-bold text-gray-50">
              <a href="#top">Deepika</a>
            </h1>
          </div>

          <div className="nav-comp  ">
            <ul
              className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full border border-gray-900 px-12  py-3 `}
            >
              <li>
                <a href="#top" className="font-Ovo text-gray-50">
                  Home
                </a>
              </li>
              <li>
                <a href="#service" className="font-Ovo text-gray-50">
                  My Services
                </a>
              </li>
              <li>
                <a href="#about" className="font-Ovo text-gray-50">
                  About Me
                </a>
              </li>
              <li>
                <a href="#project" className="font-Ovo text-gray-50">
                  My Project
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <a
              href="#connect"
              className="hidden lg:flex items-center gap-3 border border-gray-700 text-white rounded-full px-6 font-Ovo py-2"
            >
              Connect
              <Image
                src={"assests/Vector.svg"}
                alt="contact-img"
                width={10}
                height={10}
              />
            </a>
            <button className="block md:hidden" onClick={openMenu}>
              <Image
                alt="menu"
                src={"assests/menu.svg"}
                width={30}
                height={30}
              />
            </button>
          </div>

          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 fixed -right-64 px-12 py-20 top-0 bottom-0 w-64 z-50 h-screen bg-red-400 transition duration-500"
          >
            <div className="absolute top-6 right-6" onClick={closeMenu}>
              <Image
                src={"assests/cross.svg"}
                width={20}
                height={20}
                alt="cross"
              />
            </div>

            <li>
              <a href="#top" className="font-Ovo" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#service" className="font-Ovo" onClick={closeMenu}>
                My Services
              </a>
            </li>
            <li>
              <a href="#about" className="font-Ovo" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#project" className="font-Ovo" onClick={closeMenu}>
                My Project
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
