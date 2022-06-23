import React from "react";
import SEO from "@bradgarropy/next-seo";
import Image from "next/image";
import course from "../public/course.jpg";
import Contact from "../components/Contact";
import Jeevanidhi from "../components/Jeevanidhi";

import Callorchat from "../components/Callorchat";

function courses() {
  return (
    <div className="mb-20">
      <SEO
        title="Lia Group International | Courses"
        facebook={{
          image: "/lia.png",
          url: "https://www.liagroupinternational.com/courses",
          type: "website",
        }}
        description="Courses that Lia Group International Provides for their stdents."
      />
      <main>
        <div className="container">
          <div className="flex items-center justify-between py-10  h-full w-full absolute z-0">
            <div className="w-1/3  bg-secondary_light bg-opacity-25 h-full" />
            <div className="w-4/6 ml-16  bg-white h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h2 className="">Courses</h2>
            <div className="flex">
              <div className="mt-14 md:flex w-full">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <Image
                    src={course}
                    alt="Lia International Landing picture "
                    layout="fill"
                    className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                  />
                </div>
                <div className="md:w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div className="w-full">
                    <Jeevanidhi />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Callorchat />
        <div className="mt-20 opacity-0">.</div>
        <Contact />
      </main>
    </div>
  );
}

export default courses;
