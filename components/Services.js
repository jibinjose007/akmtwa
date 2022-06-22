import React from "react";
import servdata from "../components/servicesinfo";
import Image from "next/image";

function Services() {
  return (
    <div className="container">
      <div className="flex flex-col px-5 my-10 mt-20">
        <h2 className=" text-center font-semibold">Services We Do</h2>
        <div className="mt-10 w-full md:px-14 grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-1 overflow-hidden">
          {servdata.map((data) => (
            <div
              key={data.id}
              className="my-5 md:my-0 relative servhover hover:shadow-md transition-shadow ease-in-out duration-150 hover:bg-transparent bg-secondary_light bg-opacity-25 text-primary p-10"
            >
              <h2 className="text-2xl font-semibold mb-3 font-serif">
                {data.tittle}
              </h2>
              <p className=" text-gray-500">{data.description}</p>
              <div className=" servimg absolute top-0 right-0 duration-150 ease-in-out transition-opacity opacity-0 -z-10 left-0 w-full h-full">
                <div className="relative h-full w-full">
                  <Image
                    src={data.image}
                    alt={`Lia International Services image of ${data.tittle}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
