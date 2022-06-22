import React from "react";
import SEO from "@bradgarropy/next-seo";
import Link from "next/link";
import Image from "next/image";
import pic2 from "../public/pic2.jpg";
import Services from "../components/Services";
import Contact from "../components/Contact";

function about() {
  return (
    <div>
      <SEO
        title="Lia Group International | About"
        facebook={{
          image: "/lia.png",
          url: "https://www.liagroupinternational.com/about",
          type: "website",
        }}
        description="About Lia Group International"
      />
      <main>
        <div className="container">
          <div className="flex items-center justify-between py-10 h-full w-full absolute z-0">
            <div className="w-1/3  bg-secondary_light bg-opacity-25 h-full" />
            <div className="w-4/6 ml-16  bg-white h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h1 className="text-5xl font-semibold">
              About Lia Group International
            </h1>
            <div className="flex">
              <div className="mt-14 md:flex">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <Image
                    src={pic2}
                    alt="Lia International Landing picture "
                    layout="fill"
                    className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div>
                    <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                      We are pioneers in career guidance and admission
                      assistance.
                      <br />
                      <span className=" font-semibold">
                        Lia Group International
                      </span>{" "}
                      is devoted to providing « direction to prospective
                      students to pursue their career, guiding them with a
                      comprehensive umbrella of services right from their choice
                      of college / university. At{" "}
                      <span className="font-semibold">Lia International</span>{" "}
                      we take pride in our ability to provide accurate
                      information, help to take right decisions in a cost
                      efficient manner while building strong relationships with
                      students and universities alike. We are an authorized
                      admission center for reputed educational institutions and
                      have a history of excellence in career guidance.{" "}
                      <span className="font-semibold">Lia International</span>{" "}
                      is a symbol of trust for thousands of parents and sudents.
                      A full fledged team of highly qualified and experienced
                      professionals at{" "}
                      <span className="font-semibold">Lia International</span>{" "}
                      assist students to achieve their goals.
                    </p>
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

export default about;
