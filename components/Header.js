import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Logo1 from "../public/lia.png";
import Image from "next/image";
import Link from "next/link";
import ActiveLinks from "./ActiveLinks";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const menuvarients = {
    visible: { opacity: 1, marginTop: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, marginTop: "-200%", transition: { duration: 0.5 } },
  };

  return (
    <nav className="bg-white md:px-20 sticky top-0 z-50" role="navigation">
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-between md:flex-no-wrap">
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
          </ul>
        </motion.div>
        <div className="w-full md:w-auto  md:flex md:items-center hidden">
          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
