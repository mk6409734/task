"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



export const Travel = () => {
    return (
      <>
        <div className="flex flex-row mx-3 justify-around md:text-4xl text-2xl bg-black text-white h-[112px] rounded-xl font-semibold items-center text-center">
          <h1 className="border-b border-[#00DC82] pb-2">Travel</h1>
          <h1>Digital</h1>
          <h1>Brand</h1>
          <h1>Merch</h1>
        </div>

        <div className="flex flex-col mx-5 rounded-xl my-7">
          {/* Top Section */}
          <div className="relative h-[144px] md:h-[340px] lg:h-[500px] ">
            <Image
              src="/Frame.png"
              width={1200}
              height={540}
              className="rounded-t-3xl"
              alt="mount"
            />
            <h1 className="text-white uppercase lg:text-9xl md:text-7xl text-4xl md:top-16 top-10 absolute inset-x-0 mx-auto text-center font-bold tracking-widest">
              Travel
            </h1>
            <p className="text-white w-11/12 max-w-[700px] lg:text-3xl md:text-xl text-sm md:bottom-20 bottom-0 inset-x-0 absolute mx-auto text-center font-bold tracking-wider">
              Turn your travel experience into itinerary, travel package with
              VYB Store and share it with your true followers.
            </p>
          </div>
          {/* Middle Section */}
          <div className="bg-black lg:h-[596px] md:h-[440px] justify-center">
            <h1 className="text-white my-10 md:my-5 md:text-3xl text-xl text-center font-bold tracking-wider">
              Explore Our Curated Travel Itineraries
            </h1>
            <div className="mx-7">
              <Swiper
                //   spaceBetween={10}
                //   slidesPerView={1}
                className=""
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative my-5">
                    <Image src="/Frame1575.png" height={480} width={270} />
                    <p className="text-white absolute lg:text-xl text-sm tracking-wider left-10 font-bold bottom-16">
                      Darjeeling Itinerary
                    </p>
                    <p className="text-white absolute md:text-md text-xs tracking-wider lg:left-24 left-10 font-bold bottom-10">
                      West Bangel
                    </p>
                    <div className="md:w-[191px] h-[31px] bg-white rounded-2xl absolute left-10 p-1 bottom-1 lg:flex hidden justify-around items-center">
                      <h1 className="font-bold text-base ">Samira Hadid</h1>
                      <Image
                        src="/user.jpeg"
                        height={23}
                        width={23}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="relative my-5">
                    <Image src="/Frame1183.png" height={480} width={270} />
                    <p className="text-white absolute lg:text-xl text-sm tracking-wider left-10 font-bold bottom-16">
                      Munnar Itinerary
                    </p>
                    <p className="text-white absolute  md:text-md text-xs tracking-wider lg:left-24 left-10 font-bold bottom-10">
                      Kerla
                    </p>
                    <div className="w-[191px] h-[31px] bg-white rounded-2xl absolute left-10 p-1 bottom-1 lg:flex hidden justify-around items-center">
                      <h1 className="font-bold">Samira Hadid</h1>
                      <Image
                        src="/user.jpeg"
                        height={23}
                        width={23}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative my-5">
                    <Image src="/Frame1182.png" height={480} width={270} />
                    <p className="text-white absolute lg:text-xl text-sm tracking-wider left-10 font-bold bottom-16">
                      Delhi Itinerary
                    </p>
                    <p className="text-white absolute md:text-md text-xs tracking-wider lg:left-24 left-10 font-bold bottom-10">
                      Delhi
                    </p>
                    <div className="w-[191px] h-[31px] bg-white rounded-2xl absolute left-10 p-1 bottom-1 lg:flex hidden justify-around items-center">
                      <h1 className="font-bold">Samira Hadid</h1>
                      <Image
                        src="/user.jpeg"
                        height={23}
                        width={23}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative my-5">
                    <Image src="/Frame1182.png" height={480} width={270} />
                    <p className="text-white absolute lg:text-xl text-sm tracking-wider left-10 font-bold bottom-16">
                      Delhi Itinerary
                    </p>
                    <p className="text-white absolute md:text-md text-xs tracking-wider lg:left-24 left-10 font-bold bottom-10">
                      Delhi
                    </p>
                    <div className="w-[191px] h-[31px] bg-white rounded-2xl absolute left-10 p-1 bottom-1 lg:flex hidden justify-around items-center">
                      <h1 className="font-bold">Samira Hadid</h1>
                      <Image
                        src="/user.jpeg"
                        height={23}
                        width={23}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative my-5">
                    <Image src="/Frame1182.png" height={480} width={270} />
                    <p className="text-white absolute lg:text-xl text-sm tracking-wider left-10 font-bold bottom-16">
                      Delhi Itinerary
                    </p>
                    <p className="text-white absolute md:text-md text-xs tracking-wider lg:left-24 left-10 font-bold bottom-10">
                      Delhi
                    </p>
                    <div className="w-[191px] h-[31px] bg-white rounded-2xl absolute left-10 p-1 bottom-1 lg:flex hidden justify-around items-center">
                      <h1 className="font-bold">Samira Hadid</h1>
                      <Image
                        src="/user.jpeg"
                        height={23}
                        width={23}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative my-5">
                    <Image src="/Frame1182.png" height={480} width={270} />
                    <p className="text-white absolute lg:text-xl text-sm tracking-wider left-10 font-bold bottom-16">
                      Delhi Itinerary
                    </p>
                    <p className="text-white absolute md:text-md text-xs tracking-wider lg:left-24 left-10 font-bold bottom-10">
                      Delhi
                    </p>
                    <div className="w-[191px] h-[31px] bg-white rounded-2xl absolute left-10 p-1 bottom-1 lg:flex hidden justify-around items-center">
                      <h1 className="font-bold">Samira Hadid</h1>
                      <Image
                        src="/user.jpeg"
                        height={23}
                        width={23}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="bg-gradient-to-r from-[#ff5d5d05] to-[#4794ff0f] h-[44px]">
              <h1 className="text-white my-5 text-3xl text-center font-bold tracking-wider">
                How to List?
              </h1>
            </div>
          </div>
          {/* Additional Bottom Section */}
          <div className="bg-gradient-to-r from-[#ff5d5d57] relative to-[#4794ff68] h-[650px] rounded-b-2xl flex items-center justify-center">
            <Image
              src="/mount.png"
              className="rounded-b-2xl absolute bottom-0"
              height={497}
              width={1200}
              alt="user"
            />
            <Image
              src="/Vector.png"
              className="absolute top-24 md:top-12"
              height={222.63}
              width={1200}
              alt="user"
            />
            <div className="md:h-[272.46px] md:w-[227.89px] w-[86.56px] h-[164.54px] absolute top-32  md:top-[220px] text-center items-center  flex flex-col text-white">
              <div>
                <Image
                  src="/plan2.png"
                  className="mb-6"
                  height={96}
                  width={96}
                  alt="plan"
                />
              </div>
              <div className="font-bold">
                <p className="text-lg">02</p>
                <p className="text-lg">Convert into Travel Package</p>
              </div>
            </div>
            <div className="md:h-[272.46px] md:w-[227.89px] w-[86.56px] h-[164.54px] absolute right-0 top-20 md:right-5 md:top-[90px] text-center items-center  flex flex-col text-white">
              <div>
                <Image
                  src="/plan3.png"
                  className="mb-6"
                  height={96}
                  width={96}
                  alt="plan"
                />
              </div>
              <div className="font-bold">
                <p className="text-lg">03</p>
                <p className="text-lg">Earn by sharing</p>
              </div>
            </div>
            <div className="md:h-[272.46px] md:w-[227.89px] w-[86.56px] h-[164.54px] absolute left-0 top-20 md:left-8 md:top-[100px]  text-center items-center  flex flex-col text-white">
              <div>
                <Image
                  src="/plan1.png"
                  className="mb-6"
                  height={96}
                  width={96}
                  alt="plan"
                />
              </div>
              <div className="font-bold">
                <p className="text-lg">01</p>
                <p className="text-lg">Create Itinerary</p>
              </div>
            </div>
            <h1 className="text-white bottom-5 text-3xl text-center absolute font-light tracking-wider">
              You Curate Experience,We Make It Happen
            </h1>
          </div>
        </div>
      </>
    );
}