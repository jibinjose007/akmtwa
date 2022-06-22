import Image from "next/image";
import React from "react";
import Logo1 from "../public/lia.png";
import Link from "next/link";
import ActiveLinks from "./ActiveLinks";
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
function Footer() {
  return (
    <footer className="text-primary body-font bg-secondary_light bg-opacity-25">
      <div className="container md:px-40 px-10 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left my-auto">
          <Link href="/">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <div className="relative w-full">
                <Image src={Logo1} alt="Lia Group International Logo" />
              </div>
            </a>
          </Link>
          <p className="mt-0 text-center text-xl text-gray-500">
            Let your future begins with us
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 my-auto -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Other Pages
            </h2>
            <nav className="list-none mb-10 -ml-4 -mt-2 -space-y-3">
              <li className="">
                <ActiveLinks href="/">Home</ActiveLinks>
              </li>
              <li className="">
                <ActiveLinks href="/about">About</ActiveLinks>
              </li>
              <li className="">
                <ActiveLinks href="/courses">Course</ActiveLinks>
              </li>
              <li className="">
                <ActiveLinks href="/colleges">Colleges</ActiveLinks>
              </li>
              <li className="">
                <ActiveLinks href="/contact">Contact</ActiveLinks>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4 my-auto">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Contact info
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <p className="text-gray-600 hover:text-gray-800 flex space-x-3">
                  <GoLocation className="mt-1 text-xs " />
                  <span className="text-left">
                    Arafa building , Kariyannur, Erumapetty p.o , Thrissur dt ,
                    kerala
                  </span>
                </p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800 flex items-center space-x-3">
                  <BsTelephone className="mt-1 text-xs" />
                  <span>+91 70348 88771</span>
                </p>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send/?phone=9170348%2088771&text=I+am+contacting+you+from+your+website.&app_absent=0">
                  <a
                    rel="noopener noreferrer"
                    className="text-gray-600 ml-1"
                    target="_blank"
                  >
                    <p className="text-gray-600 hover:text-gray-800 flex space-x-3 items-center">
                      <BsWhatsapp className="mt-1 text-xs" />
                      <span>+91 70348 88771</span>
                    </p>
                  </a>
                </Link>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800 flex space-x-3 items-center">
                  <IoMailOutline className="mt-1 text-xs" />
                  <span>info.liagroupinternational@gmail.com</span>
                </p>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 —
            <Link href="/">
              <a
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                Lia Group International
              </a>
            </Link>
          </p>
          <p className="text-gray-500 text-sm text-center ml-10 sm:text-left">
            Website designed by —
            <Link href="https://www.jibinjosedev.com/">
              <a
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                Jibin Jose
              </a>
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/liagroupinternational/">
              <a className="text-gray-500" target="_blank">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </Link>
            <Link href="https://www.instagram.com/lia_educare/">
              <a className="ml-3 text-gray-500" target="_blank">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
