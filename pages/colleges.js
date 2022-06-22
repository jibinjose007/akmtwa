import React from "react";
import SEO from "@bradgarropy/next-seo";
import Link from "next/link";
import Image from "next/image";
import pic2 from "../public/pic1.jpg";
import Services from "../components/Services";
import Contact from "../components/Contact";

function colleges() {
  return (
    <div>
      <SEO
        title="Lia Group International | Colleges"
        facebook={{
          image: "/lia.png",
          url: "https://www.liagroupinternational.com/colleges",
          type: "website",
        }}
        description="Colleges that Lia group international provides for students"
      />
      <main>
        <div className="container">
          <div className="flex items-center justify-between py-10 h-full w-full absolute z-0">
            <div className="w-1/3  bg-secondary_light bg-opacity-25 h-full" />
            <div className="w-4/6 ml-16  bg-white h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h2 className="">Colleges</h2>
            <div className="flex">
              <div className="mt-14 md:flex  w-full items-center">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <Image
                    src={pic2}
                    alt="Lia International Landing picture "
                    layout="fill"
                    className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                  />
                </div>
                <div className="md:w-full lg:w-1/3 xl:ml-32 my-auto md:ml-20 md:mt-0 mt-4 flex flex-col justify-between ">
                  <div>
                    <p className="text-base font-medium  leading-6 mt-4 text-gray-600">
                      Please contact Us through our contact page for more
                      details.
                    </p>
                    <Link href="https://api.whatsapp.com/send/?phone=9170348%2088771&text=I+am+contacting+you+from+your+website.&app_absent=0">
                      <a className="bg-secondary px-5 mt-5 flex items-center justify-center text-center py-2 text-green-50 hover:shadow-2xl hover:shadow-secondary   ">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default colleges;
