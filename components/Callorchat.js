import Link from "next/link";
import React from "react";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

function Callorchat() {
  return (
    <div className="container">
      <div className="px-5 my-10 py-20 flex flex-col bg-tertiary_light text-center bg-opacity-10">
        <h2 className=" font-semibold mb-5">For Free Counselling</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5">
          <Link href="tel:+91 70348 88771">
            <a className="bg-tertiary px-5 flex items-center justify-center text-center py-2 text-orange-50 hover:shadow-2xl hover:shadow-tertiary   ">
              <BsTelephone className="mr-5" /> Call Now
            </a>
          </Link>
          <Link href="https://api.whatsapp.com/send/?phone=9170348%2088771&text=I+am+contacting+you+from+your+website.&app_absent=0">
            <a className="bg-secondary px-5 flex items-center justify-center text-center py-2 text-green-50 hover:shadow-2xl hover:shadow-secondary   ">
              <BsWhatsapp className="mr-5" /> Chat Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Callorchat;
