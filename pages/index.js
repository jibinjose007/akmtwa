import Image from "next/image";
import pic1 from "../public/pic1.jpg";
import pic2 from "../public/pic2.jpg";
import testi1 from "../public/testi1.jpg";
import testi2 from "../public/testi2.jpg";
import testi3 from "../public/testi3.jpg";
import testi4 from "../public/testi4.png";
import testi5 from "../public/testi5.png";
import topimg1 from "../public/topimg1.png";
import topimg2 from "../public/topimg2.png";
import founder from "../public/founder.jpeg";
import testiicon1 from "../public/testimonial-svg2.svg";
import testiicon2 from "../public/testimonial-svg3.svg";

import SEO from "@bradgarropy/next-seo";
import { BsArrowDown, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { BiBook, BiGroup, BiUser } from "react-icons/bi";
import { VscPerson } from "react-icons/vsc";

import Link from "next/link";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Callorchat from "../components/Callorchat";
import Head from "next/head";
import Blog from "../components/Blog";
import Jeevanidhi from "../components/Jeevanidhi";
export default function Home() {
  return (
    <div>
      <SEO
        title="All Kerala Marbles and Tiles Workers Association | Home"
        facebook={{
          image: "/lia.png",
          url: "https://www.akmtwa.com",
          type: "website",
        }}
        description="We’re here to offer the best support, to help you troubleshoot any career related issues and superior education"
      />
      <main>
        <div className="container">
          <div className="flex items-center justify-between h-full w-full absolute z-0">
            <div className="w-1/3 bg-white h-full" />
            <div className="w-4/6 halflanding ml-16 bg-secondary_light bg-opacity-25 h-full rounded" />
          </div>
          <div className="xl:px-20 h-[90vh] px-8 flex flex-col justify-center text-primary pt-5 2xl:mx-auto  2xl:container relative z-40">
            <h1 className="text-5xl font-bold xl:block hidden leading-tight ">
              All Kerala Marbles and Tiles Workers Association
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-primary">
              All Kerala Marbles and Tiles Workers Association
            </h1>
            <div className="flex">
              <div className="mt-14 md:flex">
                <div className="relative lg:w-1/2 sm:w-96">
                  <div>
                    <h1 className="text-2xl font-semibold ">
                      We’re here to offer the best support, to help you
                      troubleshoot any career related issues and superior
                      education
                    </h1>
                    <p className="text-base font-medium leading-6 mt-4">
                      We are pioneers in career guidance and admission
                      assistance.
                      <br />
                      <span className=" font-semibold">
                        Lia International
                      </span>{" "}
                      is devoted to providing « direction to prospective
                      students to pursue their career, guiding them with a
                      comprehensive umbrella of services right from their choice
                      of college / university
                    </p>
                  </div>
                  <div className="md:mt-0 mt-8">
                    <p className="text-left mt-5 p-5 w-fit flex items-center rounded bg-tertiary bg-opacity-25  space-x-10">
                      Scroll Down
                      <BsArrowDown className="ml-2" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-96">
          <div className="flex items-center justify-between py-10 h-full w-full absolute z-0">
            <div className="w-1/3  bg-secondary_light bg-opacity-25 h-full" />
            <div className="w-4/6 ml-16  bg-white h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h1 className="text-5xl font-semibold">About Our Founder</h1>
            <div className="flex">
              <div className="mt-14 md:flex">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-full">
                  <Image
                    src={founder}
                    alt="AKMTWA Founder Image "
                    layout="fill"
                    className="w-full h-full flex-shrink-0 object-fit object-top object-cover shadow-lg rounded"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div>
                    <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                      We are pioneers in career guidance and admission
                      assistance.
                      <br />
                      <span className=" font-semibold">
                        Lia International
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

        <div className="container md:first-line:mt-40 mb-20">
          <div className="md:px-20 px-8 md:py-20">
            <h2 className=" mb-56">Meet Our Executive Members</h2>
            <div className="flex md:px-40 flex-col items-center justify-center space-y-60 md:space-x-32">
              <div className="p-8 w-80 cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className="-mb-32 -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center ">
                  <h3 className="text-center text-4xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-80 cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className="-mb-32 -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg2}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center ">
                  <h3 className="text-center text-4xl font-bold">ഷാജി വി കെ</h3>
                  <span className="text-sm">സംസ്ഥാന ജനറൽ സെക്രട്ടറി</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-80 cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className="-mb-32 -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center ">
                  <h3 className="text-center text-4xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container md:first-line:mt-40 mb-20">
          <div className="md:px-20 px-8 md:py-20">
            <h2 className="mb-20">Meet Our State members</h2>
            <div className="grid md:px-40 grid-cols-2 gap-14 items-center justify-center  md:space-x-32">
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container md:first-line:mt-40 mb-20">
          <div className="md:px-20 px-8 md:py-20">
            <h2 className="mb-20">Meet Our Other board members</h2>
            <div className="grid md:px-40 grid-cols-2 gap-14 items-center justify-center  md:space-x-32">
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
              <div className="p-8 w-full cursor-pointer rounded-lg bg-secondary_light bg-opacity-25 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className=" -translate-y-1/2 transform">
                  <div className="relative ">
                    <Image
                      src={topimg1}
                      alt="AKMTWA Member"
                      title="AKMTWA Member"
                      class="mx-auto object-cover  h-64"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16">
                  <h3 className="text-center text-2xl font-bold">Suresh M N</h3>
                  <span className="text-sm">Secretary</span>
                </div>

                {/* <div className="text-center">
                <button className="rounded-xl bg-black px-24 py-2 text-white">
                  Select player
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex items-center justify-between py-10 h-full w-full absolute z-0">
            <div className="w-1/3  bg-secondary_light bg-opacity-25 h-full" />
            <div className="w-4/6 ml-16  bg-white h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h1 className="text-5xl font-semibold">About AKMTWA</h1>
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
                        Lia International
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
                    <Link href="/about">
                      <a className="bg-secondary px-5 mt-5 flex items-center justify-center text-center py-2 text-green-50 hover:shadow-2xl hover:shadow-secondary   ">
                        Read More About Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container mb-20">
          <h1 className="text-5xl px-10 font-bold block leading-tight lg:leading-10 text-primary">
            Recent Activities
          </h1>
          <Blog />
        </div>
        <Contact />

        <div className="container">
          <div className="flex items-center justify-between py-10 h-full w-full absolute z-0">
            <div className="w-1/3  bg-secondary_light bg-opacity-25 h-full" />
            <div className="w-4/6 ml-16  bg-white h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h1 className="text-5xl font-semibold">Other Activities</h1>
            <h3 className="text-3xl font-semibold font-serif mt-10">
              Welfare Society
            </h3>
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
                        Lia International
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
                    <Link href="/about">
                      <a className="bg-secondary px-5 mt-5 flex items-center justify-center text-center py-2 text-green-50 hover:shadow-2xl hover:shadow-secondary   ">
                        Read More About Welfare Society
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Jeevanidhi />
        <Contact />
        <div className="container">
          <iframe
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Chavakkad%20-%20Wadakkanchery%20Rd,%20Kariyannoor,%20Erumapetty,%20Kerala%20%20Thrisur+(Lia%20Group%20International)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
        </div>
      </main>
    </div>
  );
}
