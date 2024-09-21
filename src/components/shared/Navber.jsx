"use client";

import React, { useState } from "react";
import logo from "../../Assets/header/logo.png";
import icon1 from "../../Assets/header/icon1.png";
import Image from "next/image";
import Link from "next/link";

import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode, MdOutlineDashboard } from "react-icons/md";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" p-5 shadow md:px-10">
      <div className=" flex items-center justify-between">
        <Link href="/">
          <Image src={logo} width={100} height={100} alt=""></Image>
        </Link>

        <div className="hidden md:flex items-center font-semibold gap-6">
          <Link href="/">
            <button className="focus:text-secondary text-primary">Home</button>
          </Link>
          <Link href="/">
            <button className="focus:text-secondary text-primary">
              Country
            </button>
          </Link>
          <Link href="/courses">
            <button className="focus:text-secondary text-primary">
              Courses
            </button>
          </Link>
          <Link href="/contact">
            <button className="focus:text-secondary text-primary">
              Contact Us
            </button>
          </Link>
          <Link href="/">
            <Image src={icon1} width={20} height={20} alt=""></Image>
          </Link>
          <button
            onClick={handleToggle}
            className={`bg-primary pr-6 py-1 px-1 rounded-full focus:outline-none
          }`}
          >
            <span
              className={`block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                isActive ? "translate-x-full" : ""
              }`}
            >
              {isActive ? (
                <MdDarkMode className="w-6 text-center pt-[2px] text-blue-950 h-5" />
              ) : (
                <IoSunny className="w-6 text-center pt-[2px] text-yellow-500 h-5" />
              )}
            </span>
          </button>

          <Link href={"/dashboard"}>
                    <button className="bg-primaryGradiant rounded  font-semibold text-white flex py-[10px] px-5 gap-[10px] items-center ">
                      Dashboard <MdOutlineDashboard className="text-2xl" />
                    </button>
                  </Link>


          <Link href="/">
            <button className="flex rounded items-center gap-3 px-3 py-2 border-primary border-2 duration-300 hover:text-secondary text-primary">
              Log In / Sign Up
              <FaRegUserCircle className="text-2xl" />
            </button>
          </Link>
        </div>

        {/* small device sticky */}
        <div className="flex gap-3 items-center  md:hidden">
          <Link href="/">
            <Image src={icon1} width={30} height={30} alt=""></Image>
          </Link>
          <button
            onClick={handleToggle}
            className={`bg-primary pr-7 py-1 px-1 rounded-full focus:outline-none
          }`}
          >
            <span
              className={`block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                isActive ? "translate-x-full" : ""
              }`}
            >
              {/* {isActive ? (
              <Image src={icon2} width={30} height={30} alt=""></Image>
            ) : (
              <Image src={icon3} width={30} height={30} alt=""></Image>
            )} */}
            </span>
          </button>
          <button onClick={toggleMenu}>
            <IoMdMenu className="text-4xl text-primary" />
          </button>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidde block text-start">
        {isMenuOpen && (
          <div className="flex flex-col mt-5 font-semibold gap-2">
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                Home
              </button>
            </Link>
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                Country
              </button>
            </Link>
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                Courses
              </button>
            </Link>
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                Contact Us
              </button>
            </Link>
            <Link className="mt-3" href="/">
              <button className="flex rounded items-center gap-3 px-3 py-2 border-primary border-2 duration-300 hover:text-secondary text-primary">
                Log In / Sign Up
                <FaRegUserCircle className="text-2xl" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
