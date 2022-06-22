import React, { useState } from "react";
import contact from "../public/contact.jpg";
import Link from "next/link";
import { BsArrowDown, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoLocation } from "react-icons/go";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [nameerror, setNameerror] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [messageerror, setMessageerror] = useState(false);
  const [phoneerror, setPhoneerror] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
      phone,
    };

    if (name === "" || email === "" || message === "" || phone === "") {
      setNameerror(true);
      setEmailerror(true);
      setMessageerror(true);
      setPhoneerror(true);
    } else {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          toast.success(`Thank You for contacting Us ${name}`);
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
        }
      });
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-secondary_light bg-opacity-25 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
          Contact Us
        </h1>
        <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
          Contact Us
        </h1>
        <div className="flex">
          <div className="mt-14 md:flex w-full">
            <div className="flex w-full flex-col">
              <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                <Image
                  src={contact}
                  alt="Lia International Landing picture "
                  layout="fill"
                  className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                />
              </div>
              <div className="flex mt-10 flex-col max-w-md space-y-5 text-primary">
                <p className="flex space-x-3 text-xl items-center">
                  <BsTelephone />
                  <span>+91 70348 88771</span>
                </p>
                <p className="flex space-x-3 text-xl">
                  <GoLocation className="text-2xl" />
                  <span>
                    Arafa building , Kariyannur, Erumapetty p.o , Thrissur dt ,
                    Kerala
                  </span>
                </p>
                <span className="flex text-left md:mb-20 sm:mt-0 mt-2">
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
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </Link>
                </span>
              </div>
            </div>

            <div className=" w-full xl:ml-32 md:ml-20 md:mt-0 mt-10 bg-secondary_light md:bg-transparent bg-opacity-25 p-5 flex flex-col justify-between">
              <div className="w-full">
                <form>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                      value={name}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder="Full Name"
                      className={`w-full rounded-md ${
                        nameerror ? "border-red-500 border" : ""
                      }   bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      autoComplete="email"
                      required
                      value={email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@gmail.com"
                      className={`w-full rounded-md ${
                        emailerror ? "border-red-500 border" : ""
                      }   bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone
                    </label>
                    <input
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      autoComplete="phone"
                      required
                      value={phone}
                      type="phone"
                      name="phone"
                      id="phone"
                      placeholder="123 456 7890"
                      className={`w-full rounded-md ${
                        emailerror ? "border-red-500 border" : ""
                      }   bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Message
                    </label>
                    <textarea
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      required
                      value={message}
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className={` ${
                        messageerror ? "border-red-500 border" : ""
                      } w-full resize-none rounded-md   bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    ></textarea>
                  </div>
                  <div>
                    <input
                      type="submit"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      value={submitted ? "Submited" : "Submit"}
                      className="hover:shadow-form rounded-md cursor-pointer bg-tertiary hover:shadow-2xl hover:shadow-tertiary py-3 px-8 text-base font-semibold text-white outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
