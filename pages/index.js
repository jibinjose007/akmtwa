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
import Courseinfo from "../components/Courseinfo";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Callorchat from "../components/Callorchat";
import Head from "next/head";
import Blog from "../components/Blog";
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
            <div className="w-4/6 ml-16 bg-secondary_light bg-opacity-25 h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-primary">
              All Kerala Marbles and Tiles Workers Association
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-primary">
              All Kerala Marbles and Tiles Workers Association
            </h1>
            <div className="flex">
              <div className="mt-14 md:flex">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <Image
                    src={pic1}
                    alt="Lia International Landing picture "
                    layout="fill"
                    className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                  />

                  <Link href="/contact">
                    <a className="w-32 md:flex hidden items-center font-semibold text-white justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-tertiary_light hover:shadow-2xl hover:shadow-tertiary_light  rounded-full">
                      Contact Us
                    </a>
                  </Link>
                </div>
                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                      We’re here to offer the best support, to help you
                      troubleshoot any career related issues and superior
                      education
                    </h1>
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
                      of college / university
                    </p>
                  </div>
                  <div className="md:mt-0 mt-8">
                    <p className="text-center mt-5 pb-5 flex items-center space-x-10 justify-center">
                      Learn More
                      <BsArrowDown className="ml-2" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:first-line:mt-40">
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

        <Contact />
        <div className=" container">
          <h1 className="text-5xl px-10 font-bold block leading-tight lg:leading-10 text-primary">
            Recent Activities
          </h1>
          <Blog />
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
        <Services />
        <div className="container">
          <div className="px-5 md:px-20 grid grid-cols-2 md:grid-cols-4 md:my-32 my-10 gap-5 text-primary bg-white">
            <div className="p-10 flex flex-col shadow-2xl shadow-[#f2e0b6] ">
              <BiBook className="text-5xl p-2 text-white shadow-lg shadow-tertiary_light  bg-tertiary_light  rounded-xl" />
              <h3 className="text-lg font-semibold mt-5">150 +</h3>
              <p className="text-base  ">Courses</p>
            </div>
            <div className="p-10 flex flex-col shadow-2xl shadow-[#b1e4dd]  bg-white">
              <VscPerson className="text-5xl p-2 text-white shadow-lg shadow-secondary  bg-secondary rounded-xl" />
              <h3 className="text-lg font-semibold mt-5">1,250 +</h3>
              <p className="text-base  ">Happy Students</p>
            </div>
            <div className="p-10 flex flex-col shadow-2xl shadow-[#f2e0b6] bg-white">
              <BiGroup className="text-5xl p-2 text-white shadow-lg shadow-tertiary  bg-tertiary rounded-xl" />
              <h3 className="text-lg font-semibold mt-5">20 +</h3>
              <p className="text-base  ">Certified Trainers</p>
            </div>
            <div className="p-10 flex flex-col shadow-2xl shadow-[#b1e4dd]  bg-white">
              <BiUser className="text-5xl p-2 text-white shadow-lg shadow-secondary_light  bg-secondary_light rounded-xl" />
              <h3 className="text-lg font-semibold mt-5">25 +</h3>
              <p className="text-base  ">Eminent Counselors</p>
            </div>
          </div>
        </div>

        <Callorchat />

        <div className="container ">
          <div className="flex items-center justify-between h-full w-full absolute z-0">
            <div className="w-1/3 bg-white h-full" />
            <div className="w-4/6 ml-16 bg-secondary_light bg-opacity-25 h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={5}
              isPlaying
              infinite
            >
              <h1 className="text-5xl font-bold xl:block hidden leading-tight mb-10 text-gray-800">
                What our Students are saying
              </h1>
              <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
                What our Students are saying
              </h1>
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div className="flex">
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 mb-10">
                        <div className="relative ml-auto mr-40 w-1/5 overflow-hidden mt-20">
                          <Image
                            src={testi1}
                            alt="image of profile"
                            className=" w-1/2 h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                          />
                        </div>
                        <div className="w-32 md:flex hidden items-center shadow-xl shadow-tertiary_light justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-tertiary_light bg-opacity-70 rounded-full">
                          <div className="relative  w-10 h-10">
                            <Image
                              src="/testimonial.svg"
                              alt="commas"
                              layout="fill"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                            So Great to be part of this team!
                          </h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            Pathology Thank you so much for sharing my positive
                            experience working with &#34;LIA CONSULTANCY&#34;
                            The staff is so amazing here.Once again Thank you so
                            much from bottom of my heart 🙂
                          </p>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            AJ Medical College
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">
                            Haritha
                          </p>

                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            BASLP-Bachelor of Audiology & speeach Language
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div
                    className="flex relative"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 mb-10">
                        <div className="relative ml-auto mr-40 w-1/5 overflow-hidden mt-10">
                          <Image
                            src={testi2}
                            alt="image of profile"
                            className=" w-1/2 h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                          />
                        </div>
                        <div className="w-32 md:flex hidden items-center shadow-xl shadow-tertiary_light justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-tertiary_light bg-opacity-70 rounded-full">
                          <div className="relative  w-10 h-10">
                            <Image
                              src="/testimonial.svg"
                              alt="commas"
                              layout="fill"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                            So Great to be part of this team!
                          </h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            I wanted some of best college and the team hs worked
                            really hard and got me into the best course. I
                            can&#39;t expect for anything more. This consultancy
                            is highly recommended 😊
                          </p>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            Yenapoya Medical College
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">
                            Shamil usman
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            BPT-Bachelor of Physiotherapy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div
                    className="flex relative"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 mb-10">
                        <div className="relative ml-auto mr-40 w-1/5 overflow-hidden mt-10">
                          <Image
                            src={testi3}
                            alt="image of profile"
                            className=" w-1/2 h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                          />
                        </div>
                        <div className="w-32 md:flex hidden items-center shadow-xl shadow-tertiary_light justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-tertiary_light bg-opacity-70 rounded-full">
                          <div className="relative  w-10 h-10">
                            <Image
                              src="/testimonial.svg"
                              alt="commas"
                              layout="fill"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                            So Great to be part of this team!
                          </h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            Iam greatly thankful to &#34;LIA GROUP
                            INTERNATIONAL&#34; For their valuable guidance &
                            support to achieve my goal of getting admission in
                            best BDS AJ Medical College & I experienced the
                            staff here very friendly. The consultant have a very
                            good knowledge in helping me to find out the exact
                            program 🙂
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">
                            Gathalakshmi
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            BDS-Bachelor of Dental surgery
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div
                    className="flex relative"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 mb-10">
                        <div className="relative ml-auto mr-40 w-1/5 overflow-hidden mt-10">
                          <Image
                            src={testi4}
                            alt="image of profile"
                            className=" w-1/2 h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                          />
                        </div>
                        <div className="w-32 md:flex hidden items-center shadow-xl shadow-tertiary_light justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-tertiary_light bg-opacity-70 rounded-full">
                          <div className="relative  w-10 h-10">
                            <Image
                              src="/testimonial.svg"
                              alt="commas"
                              layout="fill"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                            So Great to be part of this team!
                          </h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            The team LIA GROUP have been very helpful , friendly
                            and provided me with all the informations and guided
                            me to join fashion designing in vogue really
                            thankful to team LIA GROUP
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">
                            Rifaz rahman
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            Vogue Institute of Art & Designing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div
                    className="flex relative"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 mb-10">
                        <div className="relative ml-auto mr-40 w-1/5 overflow-hidden mt-10">
                          <Image
                            src={testi5}
                            alt="image of profile"
                            className=" w-1/2 h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                          />
                        </div>
                        <div className="w-32 md:flex hidden items-center shadow-xl shadow-tertiary_light justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-tertiary_light bg-opacity-70 rounded-full">
                          <div className="relative  w-10 h-10">
                            <Image
                              src="/testimonial.svg"
                              alt="commas"
                              layout="fill"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                            So Great to be part of this team!
                          </h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            I would give a good Experience &#34;LIA GROUP&#34; &
                            will encourage all my Friends and those who are
                            reading thi review can approach the consultancy &
                            Make your future more Brighter
                          </p>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            Dhanalakshmi Engineering College
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">
                            Nasrin Nazeem
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            Engineering
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="flex items-center mt-8">
                <ButtonBack
                  className="cursor-pointer "
                  role="button"
                  aria-label="previous slide"
                >
                  <div className="relative">
                    <Image src={testiicon1} alt="previous" />
                  </div>
                </ButtonBack>

                <ButtonNext
                  role="button"
                  aria-label="next slide"
                  className="cursor-pointer ml-2"
                >
                  <div className="relative">
                    <Image src={testiicon2} alt="next" />
                  </div>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
        <Courseinfo />
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
