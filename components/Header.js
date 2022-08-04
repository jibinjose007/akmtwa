import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Logo1 from "../public/lia.png";
import Image from "next/image";
import Link from "next/link";
import ActiveLinks from "./ActiveLinks";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const menuvarients = {
    visible: { opacity: 1, marginTop: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, marginTop: "-200%", transition: { duration: 0.5 } },
  };

  return (
    <nav
      className="bg-white md:px-20 sticky top-0 z-50 shadow-lg"
      role="navigation"
    >
      <div className="container mx-auto p-4 pb-8 flex flex-wrap items-center justify-between md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <Link href="/" title="Lia Group International">
            <a>
              <div className="relative w-20">
                <Image alt="Lia International Logo" src={Logo1} priority />
              </div>
            </a>
          </Link>
        </div>
        <div className="ml-auto md:hidden">
          <motion.button
            onClick={() => setisOpen(!isOpen)}
            className="flex items-center px-3 py-2 text-primary"
            type="button"
          >
            {isOpen ? (
              <XIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </motion.button>
        </div>
        <div className=" space-x-10 header-info justify-center items-center md:flex hidden">
          <div className="flex-col">
            <h3>Email Address</h3>
            <p>akmtwa@gmail.com</p>
          </div>
          <div className="flex-col">
            <h3>Phone Number</h3>
            <p>123 456 7890</p>
          </div>
          <div className="flex-col">
            <h3>Our Location</h3>
            <p>Locations</p>
          </div>
          <div className="relative flex self-center items-center ">
            <IoIosArrowDown className="text-secondary text-3xl absolute right-3 pointer-events-none rounded" />
            <select className="text-sm rounded border-2 border-secondary text-gray-600 py-3 w-full pl-5 pr-16 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>English</option>
              <option>Malayalam</option>
            </select>
          </div>
        </div>
        <motion.div
          initial={false}
          variants={menuvarients}
          animate={isOpen ? "visible" : "hidden"}
          className="w-full md:w-auto md:hidden  md:items-center "
        >
          <ul className="flex flex-col mt-4  pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
            <li>
              <ActiveLinks href="/">Home</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/about">About</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/courses">Courses</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/colleges">Colleges</ActiveLinks>
            </li>

            <li>
              <ActiveLinks href="/contact">Contact</ActiveLinks>
            </li>
            <li>
              <button className="bg-white rounded text-secondary px-10 py-2">
                Donate
              </button>
            </li>
          </ul>
        </motion.div>
        <div className="w-full md:w-auto  md:flex absolute z-10 self-center left-1/2 -translate-x-1/2 bg-secondary rounded px-20 py-3 -bottom-9 shadow-lg md:items-center hidden">
          <ul className="flex flex-col mt-4 space-x-5  -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
            <li>
              <ActiveLinks href="/">Home</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/about">About</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/courses">Courses</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/colleges">Colleges</ActiveLinks>
            </li>

            <li>
              <ActiveLinks href="/contact">Contact</ActiveLinks>
            </li>
            <li>
              <button className="bg-white rounded text-secondary px-10 py-2">
                Donate
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
